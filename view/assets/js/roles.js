var id;

function create() {
    let data = `txtRol=${document.getElementById("txtRol").value}`;
    let option = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    };

    let url = "../controlador/roles.create.php"

    fetch(url, option)
        .then((response) => response.json())
        .then((data) => {
            validacion(data)
            read();
        })
        .catch((error) => {
            alertify.error(error);
        });
}

function read() {
    let url = "../controlador/roles.read.php"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let tabla = "";
            data.forEach((element, index) => {
                tabla += `<tr>`;
                tabla += `<th scope="row">${index + 1}</td>`;
                tabla += `<td>${element.nombreRol}</td>`;
                tabla += `<td>
                    <div class="form-check form-switch">
                        <input onclick="estadoRol('${element.estado}','${element.id}')" class="form-check-input" type="checkbox" id="switch${element.nombreRol}">
                        <label class="form-check-label" for="flexSwitchCheckDefault">${element.estado == 'A' ? 'Activo' : 'Inactivo'}</label>
                    </div>
                </td>`;
                tabla += `<td>
                    <a onclick="estadoUpdate(${element.id})" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#updateModal" title="Modificar"><i class="fa-solid fa-pen-to-square"></i></a> 
                    <a onclick="estadoDelete(${element.id},'${element.nombreRol}')" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" title="Eliminar"><i class="fa-solid fa-trash"></i></a>
                </td>`;
                tabla += `</tr>`;
            });
            document.getElementById("tableRol").innerHTML = tabla;
            actualizarEstado()
            alertify.warning("Roles cargados")
            let table = new DataTable("#tabla", {
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
                            columns: [0, 1, 2]
                        },
                        className: 'btn excelDataTable',
                    },
                    {
                        extend: 'pdf',
                        text: '<i class="fa-solid fa-file-pdf"></i>',
                        titleAttr: 'PDF',
                        exportOptions: {
                            columns: [0, 1, 2]
                        },
                        className: 'btn pdfDataTable',
                        download: "open",
                    },
                    {
                        extend: 'print',
                        text: '<i class="fa-solid fa-print"></i>',
                        titleAttr: 'Imprimir',
                        exportOptions: {
                            columns: [0, 1, 2]
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
                            columns: [0, 1, 2]
                        },
                        className: 'btn copyDataTable',
                    },
                ]
            });
        });
}
function update() {
    let id = localStorage.id;
    let nombreRol = document.getElementById("txtRolUpdate").value;
    let url = "../controlador/roles.update.php";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `txtRol=${nombreRol}&id=${id}`,
    }
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            alertify.success(data)
            read()
        })
}
function deletes() {
    let url = "../controlador/roles.delete.php"
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
            read()
        })
}

read();

function estadoRol(estado, id) {
    let data = `id=${id}&estado=${estado}`;
    let option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    };

    let url = "../controlador/roles.estado.php";

    fetch(url, option)
        .then((response) => response.json())
        .then((data) => {
            read();
            console.log(data);

        });
}

function actualizarEstado() {
    const estados = document.getElementById("tableRol").getElementsByClassName("form-check-input");

    const labelEsta = document.getElementById("tableRol").getElementsByClassName("form-check-label");

    for (let i = 0; i < estados.length; i++) {
        if (labelEsta[i].innerHTML == "Activo") {
            estados[i].setAttribute("checked", "")
        }

    }
}

function estadoUpdate(id) {
    let url = `../controlador/roles.readid.php?id=${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("txtRolUpdate").value = data[0].nombreRol;
            localStorage.id = data[0].id;
        })
}

function estadoDelete(id, nombreRol) {
    this.id = id;
    document.getElementById("idEliminar").innerHTML = `¿Esta seguro de eliminar el rol: ${nombreRol}?`
}

function validacion() {
    if (document.getElementById("txtRol").value == "") {
        alertify.error("Debe ingresar un rol");
        return false;
    } else {
        alertify.success("Rol creado");
    }
    return true;
}