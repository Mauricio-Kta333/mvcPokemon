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
        console.log(data);
        read();
    });
}
function read(){
 let url = "../controlador/roles.read.php"
 fetch(url)
 .then((response) => response.json())
 .then((data) => {
    let tabla = "";
    data.forEach((element, index) => {
        tabla +=`<tr>`;
        tabla +=`<th scope="row">${index + 1}</td>`;
        tabla +=`<td>${element.nombreRol}</td>`;
        tabla +=`<td><div class="form-check form-switch">
        <input onclick="estadoRol('${element.estado}','${element.id}')" class="form-check-input" type="checkbox" id="switch${element.nombreRol}">
        <label class="form-check-label" for="flexSwitchCheckDefault">${element.estado=='A'?'Activo':'Inactivo'}</label>
      </div></td>`;
        tabla +=`<td><a onclick="estadoUpdate(${element.id})" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#updateModal">Modificar</a> <a href="#" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Eliminar</a></td>`;
        tabla +=`<tr>`;
    });
    document.getElementById("tableRol").innerHTML = tabla;
    actualizarEstado()
});
}
function update(){
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
            console.log(data);
            read()
        })
}
function deletes(){

}

read();

function estadoRol(estado,id)
{
    let data =`id=${id}&estado=${estado}`;
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
        if(labelEsta[i].innerHTML == "Activo"){
            estados[i].setAttribute("checked","")
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