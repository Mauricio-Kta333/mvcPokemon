function readRol(){
    let url = "../controlador/roles.read.php";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let opciones = "<option selected disabled>Seleccione</option>";
            data.forEach((element) => {
                opciones += `<option value="${element.id}">${element.nombreRol}</option>`
            });
            selRol.innerHTML = opciones;
        });
}

function createUsuario(){
    let data = `selTipoDoc=${selTipoDoc.value}&numIdentificacion=${numIdentificacion.value}&txtNombre=${txtNombre.value}&txtApellido=${txtApellido.value}&txtCorreo=${txtCorreo.value}&txtPassword=${txtPassword.value}&txtDireccion=${txtDireccion.value}&txtTelefono=${txtTelefono.value}&selGenero=${selGenero.value}&selRol=${selRol.value}`;
    const options = {
        method: "POST",
        headers : {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    };

    let url = "../controlador/usuarios.create.php"

    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alertify.success(data);
            readUsuario();
        });
}

function readUsuario() {
    let url = "../controlador/usuarios.read.php"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let tabla = "";
            data.forEach((element, index) => {
                tabla += `<tr>`;
                tabla += `<th scope="row">${index + 1}</td>`;
                tabla += `<td>${element.tipoDoc}</td>`;
                tabla += `<td>${element.identificacion}</td>`;
                tabla += `<td>${element.nombre}</td>`;
                tabla += `<td>${element.apellido}</td>`;
                tabla += `<td>${element.idRol}</td>`;
                tabla += `<td>
                    <div class="form-check form-switch">
                        <input onclick="estadoProducto('${element.estado}','${element.id}')" class="form-check-input" type="checkbox" id="switch${element.nombrePro}">
                        <label class="form-check-label" for="flexSwitchCheckDefault">${element.estado == 'A' ? 'Activo' : 'Inactivo'}</label>
                    </div>
                </td>`;
                tabla += `<td>
                    <a onclick="estadoUpdateUser(${element.id})" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#updateModalPro" title="Modificar"><i class="fa-solid fa-pen-to-square"></i></a> 
                    <a onclick="estadoDeleteUser(${element.id},'${element.nombre}')" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModalPro" title="Eliminar"><i class="fa-solid fa-trash"></i></a>
                </td>`;
                tabla += `</tr>`;
            });
            document.getElementById("tableUsuarios").innerHTML = tabla;
            //actualizarEstadoPro()
            alertify.warning("Usuarios cargados")
            let table = new DataTable("#tablaUser", {
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
readUsuario()
readRol()