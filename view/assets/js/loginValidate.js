function readLogin() {
    url = "../controlador/login.read.php";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if(!data){
            window.location.href = "login.frm.php"
        }
    })
}

function deleteLogin() {
    let url = "../controlador/logout.php";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (!data) {
            window.location.href = "./view/login.frm.php";
        }
    });
}


window.onbeforeunload = function (e) {
    readLogin();
};