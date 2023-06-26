function login() {
    let data = new FormData();
    data.append('txtCorreo', txtCorreo.value);
    data.append('txtPassword', txtPassword.value);

    let url = "../controlador/login.php";
    fetch(url, {
        method: 'POST',
        body: data
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        try {
            if (data[0].correo === txtCorreo.value) {
                window.location.href = "roles.frm.php";
                console.log("Datos enviados correctamente al controlador");
            }
        } catch (error) {
            alert("Usuario o Password incorrectos");
        }
    });
}
