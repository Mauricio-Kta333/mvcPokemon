<?php

include_once "../model/rol.php";

session_start();
if (isset($_SESSION) and !empty($_SESSION)) {
    $response = true;
} else {
    echo "No se encontró una sesión establecida";
    header('Location: ../view/login.frm.php');
    exit();
}

$rolM = new \modelo\Rol();
$response = $rolM->read();
unset($rolM);
echo json_encode($response);
