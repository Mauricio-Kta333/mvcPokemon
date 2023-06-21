<?php

include_once "../model/usuario.php";

$correo = $_GET["correo"];
$password = $_GET["password"];

$longinM = new \modelo\Usuario;
$longinM->setCorreo($correo);
$loginM->setPassword($password);
$response = $loginM->login();

echo json_encode($response);

unset($loginM);
unset($response);