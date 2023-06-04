var id;

function createProducto(){
    let nombre = document.getElementById("txtProducto").value;
    let precio = document.getElementById("numProducto").value;
    let cantidad = document.getElementById("numProCantidad").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    
    if (nombre === '' || precio === '' || cantidad === '' || descripcion === '') {
        alertify.error("Por favor, completa todos los campos.");
        return;
    }
    
    
    let producto = `txtProducto=${document.getElementById("txtProducto").value}&numProducto=${document.getElementById("numProducto").value}
    &numProCantidad=${document.getElementById("numProCantidad").value}
    &txtDescripcion=${document.getElementById("txtDescripcion").value}`;

    let options = {
        method : "POST",
        headers : {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: producto,                
    };

    let url = "../controlador/productos.create.php";

    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("txtProducto").value = "";
            document.getElementById("numProducto").value = "";
            document.getElementById("numProCantidad").value = "";
            document.getElementById("txtDescripcion").value = "";
            readProducto()
        })
}

function readProducto() {
    let url = "../controlador/productos.read.php"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let tabla = "";
            data.forEach((element, index) => {
                tabla += `<tr>`;
                tabla += `<th scope="row">${index + 1}</td>`;
                tabla += `<td>${element.nombrePro}</td>`;
                tabla += `<td>$${element.precioPro}</td>`;
                tabla += `<td>${element.cantidadPro}</td>`;
                tabla += `<td>${element.descriPro}</td>`;
                tabla += `<td>
                    <div class="form-check form-switch">
                        <input onclick="estadoProducto('${element.estado}','${element.id}')" class="form-check-input" type="checkbox" id="switch${element.nombrePro}">
                        <label class="form-check-label" for="flexSwitchCheckDefault">${element.estado == 'A' ? 'Activo' : 'Inactivo'}</label>
                    </div>
                </td>`;
                tabla += `<td>
                    <a onclick="estadoUpdatePro(${element.id})" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#updateModalPro" title="Modificar"><i class="fa-solid fa-pen-to-square"></i></a> 
                    <a onclick="estadoDeletePro(${element.id},'${element.nombrePro}')" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModalPro" title="Eliminar"><i class="fa-solid fa-trash"></i></a>
                </td>`;
                tabla += `</tr>`;
            });
            document.getElementById("tableProducto").innerHTML = tabla;
            actualizarEstadoPro()
            alertify.warning("Productos cargados")
            let table = new DataTable("#tablaPro", {
                language: {
                    url: "./assets/es-ES.json",
                },
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excel',
                        text: '<i class="fa-solid fa-file-excel"></i>',
                        titleAttr: 'Excel',
                        exportOptions: {
                            columns: [0, 1, 2, 3]
                        },
                        className: 'btn excelDataTable',
                    },
                    {
                        extend: 'pdf',
                        text: '<i class="fa-solid fa-file-pdf"></i>',
                        titleAttr: 'PDF',
                        exportOptions: {
                            columns: [0, 1, 2, 3]
                        },
                        className: 'btn pdfDataTable',
                        download: "open",
                    },
                    {
                        extend: 'print',
                        text: '<i class="fa-solid fa-print"></i>',
                        titleAttr: 'Imprimir',
                        exportOptions: {
                            columns: [0, 1, 2, 3]
                        },
                        className: 'btn printDataTable',
                    },
                    {
                        extend: 'colvis',
                        text: '<i class="fa-solid fa-eye"></i>',
                        titleAttr: 'Ver',
                        className: 'btn verDataTable',
                    },
                    {
                        extend: 'copy',
                        text: '<i class="fa-solid fa-copy"></i>',
                        titleAttr: 'Copiar',
                        exportOptions: {
                            columns: [0, 1, 2, 3]
                        },
                        className: 'btn copyDataTable',
                    },
                ]
            });
        });
}


function updateProducto() {
    let id = localStorage.id;
    let nombrePro = document.getElementById("txtProductoUpdate").value;
    let precioPro = document.getElementById("numProductoUpdate").value;
    let cantidadPro = document.getElementById("numProCantidadUpdate").value;
    let descriPro = document.getElementById("txtDescripcionUpdate").value;
    let url = "../controlador/productos.update.php";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `txtProducto=${nombrePro}&numProducto=${precioPro}&numProCantidad=${cantidadPro}&txtDescripcion=${descriPro}&id=${id}`,
    }
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            alertify.success(data)
            readProducto()
        })
}

function deleteProducto() {
    let url = "../controlador/productos.delete.php"
    const options = {
        method: "POST",
        body: `id=${this.id}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    }

    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            alertify.error(data)
            readProducto()
        })
}

readProducto()

function estadoProducto(estado, id) {
    let data = `id=${id}&estado=${estado}`;
    let option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    };

    let url = "../controlador/productos.estado.php";

    fetch(url, option)
        .then((response) => response.json())
        .then((data) => {
            readProducto();
            console.log(data);

        });
}

function actualizarEstadoPro() {
    const estados = document.getElementById("tableProducto").getElementsByClassName("form-check-input");

    const labelEsta = document.getElementById("tableProducto").getElementsByClassName("form-check-label");

    for (let i = 0; i < estados.length; i++) {
        if (labelEsta[i].innerHTML == "Activo") {
            estados[i].setAttribute("checked", "")
        }

    }
}

function estadoUpdatePro(id) {
    let url = `../controlador/productos.readid.php?id=${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("txtProductoUpdate").value = data[0].nombrePro;
            document.getElementById("numProductoUpdate").value = data[0].precioPro;
            document.getElementById("numProCantidadUpdate").value = data[0].cantidadPro;
            document.getElementById("txtDescripcionUpdate").value = data[0].descriPro;
            localStorage.id = data[0].id;
        })
}

function estadoDeletePro(id, nombrePro) {
    this.id = id;
    document.getElementById("idEliminarProducto").innerHTML = `¿Esta seguro de eliminar el Producto: ${nombrePro}?`
}