function login() {
    let data = `correo=${txtCorreo.value}&password=${txtPassword.value}`;
    let url = "../controlador/login.php?" + data;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            try {
                if ((data[0].correo = txtCorreo.value)) {
                    window.location.href = "roles.frm.php";
                }
            } catch (error) {
                alert("Usuario o Password incorrectos");
            }
        });
}