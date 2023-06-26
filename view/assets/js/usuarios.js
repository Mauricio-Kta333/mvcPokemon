var id;
function readRol() {
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

function createUsuario() {
    let tipo = selTipoDoc.value;
    let identificacion = numIdentificacion.value;
    let nombre = txtNombre.value;
    let apellido = txtApellido.value;
    let correo = txtCorreo.value;
    let contra = txtPassword.value;
    let direccion = txtDireccion.value;
    let telefono = txtTelefono.value;
    let genero = selGenero.value;
    let rol = selRol.value;
    

    if (tipo === '' || identificacion === '' || nombre === '' || apellido === '' || correo === '' || contra === '' || direccion === '' || telefono === ''
        || genero === '' || rol === '') {
        alertify.error("Por favor, completa todos los campos.");
        return;
    }

    let data = `selTipoDoc=${selTipoDoc.value}&numIdentificacion=${numIdentificacion.value}&txtNombre=${txtNombre.value}&txtApellido=${txtApellido.value}&txtCorreo=${txtCorreo.value}&txtPassword=${txtPassword.value}&txtDireccion=${txtDireccion.value}&txtTelefono=${txtTelefono.value}&selGenero=${selGenero.value}&selRol=${selRol.value}`;
    const options = {
        method: "POST",
        headers: {
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
            numIdentificacion.value = "";
            txtNombre.value = "";
            txtApellido.value = "";
            txtCorreo.value = "";
            txtPassword.value = "";
            txtDireccion.value = "";
            txtTelefono.value = "";
            selTipoDoc.selectedIndex = 0;
            selGenero.selectedIndex = 0;
            selRol.selectedIndex = 0;

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
                tabla += `<td>${element.NombreDelRol}</td>`;
                tabla += `<td>
                    <div class="form-check form-switch">
                        <input onclick="estadoUsuario('${element.estado}','${element.id}')" class="form-check-input" type="checkbox" id="switch${element.nombrePro}">
                        <label class="form-check-label" for="flexSwitchCheckDefault">${element.estado == 'A' ? 'Activo' : 'Inactivo'}</label>
                    </div>
                </td>`;
                tabla += `<td>
                    <a onclick="estadoUpdateUser(${element.id})" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#updateModalUsuario" title="Modificar"><i class="fa-solid fa-pen-to-square"></i></a> 
                    <a onclick="estadoDeleteUser(${element.id},'${element.nombre} ${element.apellido}')" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModalUsuario" title="Eliminar"><i class="fa-solid fa-trash"></i></a>
                </td>`;
                tabla += `</tr>`;
            });
            tableUsuarios.innerHTML = tabla;
            actualizarEstadoUsuario()
            alertify.warning("Usuarios cargados")
            let table = new DataTable("#tablaUser", {
                retrieve: true,
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

function updateUsuario() {
    let id = localStorage.id;
    let tipoDocumento = selTipoDocUpdate.value;
    let numeroDocumento = numIdentificacionUpdate.value;
    let nombre = txtNombreUpdate.value;
    let apellido = txtApellidoUpdate.value;
    let correo = txtCorreoUpdate.value;
    let direccion = txtDireccionUpdate.value;
    let telefono = txtTelefonoUpdate.value;
    let genero = selGeneroUpdate.value;
    let url = "../controlador/usuarios.update.php";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `selTipoDoc=${tipoDocumento}&numIdentificacion=${numeroDocumento}&txtNombre=${nombre}&txtApellido=${apellido}&txtCorreo=${correo}&txtDireccion=${direccion}&txtTelefono=${telefono}&selGenero=${genero}&id=${id}`,
    }
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            alertify.success(data)
            readUsuario()
        })
}

function deleteUsuario() {
    let url = "../controlador/usuarios.delete.php"
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
            readUsuario()
        })
}

function estadoUsuario(estado, id) {
    let data = `id=${id}&estado=${estado}`;
    let option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    };

    let url = "../controlador/usuarios.estado.php";

    fetch(url, option)
        .then((response) => response.json())
        .then((data) => {
            readUsuario();
            readRol();
            console.log(data);

        });
}

function actualizarEstadoUsuario() {
    const estados = tableUsuarios.getElementsByClassName("form-check-input");

    const labelEsta = tableUsuarios.getElementsByClassName("form-check-label");

    for (let i = 0; i < estados.length; i++) {
        if (labelEsta[i].innerHTML == "Activo") {
            estados[i].setAttribute("checked", "")
        }

    }
}

function estadoUpdateUser(id) {
    let url = `../controlador/usuarios.readid.php?id=${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            selTipoDocUpdate.value = data[0].tipoDoc;
            numIdentificacionUpdate.value = data[0].identificacion;
            txtNombreUpdate.value = data[0].nombre;
            txtApellidoUpdate.value = data[0].apellido;
            txtCorreoUpdate.value = data[0].correo;
            txtDireccionUpdate.value = data[0].direccion;
            txtTelefonoUpdate.value = data[0].telefono;
            selGeneroUpdate.value = data[0].genero;
            localStorage.id = data[0].id;
        })
}

function estadoDeleteUser(id, nombreApellido) {
    this.id = id;
    idEliminarUsuario.innerHTML = `¿Esta seguro de eliminar al Usuario: ${nombreApellido}?`
}