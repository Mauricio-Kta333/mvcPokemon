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
        tabla +=`<td><a href="#" class="btn btn-outline-warning">Modificar</a> <a href="#" class="btn btn-outline-danger">Eliminar</a></td>`;
        tabla +=`<tr>`;
    });
    document.getElementById("tableRol").innerHTML = tabla;
    actualizarEstado()
});
}
function update(){

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