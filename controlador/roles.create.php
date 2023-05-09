<?php
//
include_once "../model/rol.php";

$nombreRol = $_POST["txtRol"];

$rolM = new \modelo\Rol();

$rolM->setNombreRol($nombreRol);

$response = $rolM->create();

unset($rolM);

echo json_encode($response);