<?php

include_once "../model/usuario.php";

$id = $_POST['id'];
$estado = $_POST['estado'];
if ($estado == 'A'){
    $estado = 'I';
}else{
    $estado = 'A';
}
$usuarioM = new \modelo\Usuario();

$usuarioM->setId($id);
$usuarioM->setEstado($estado);
$response = $usuarioM->estadoUsuario();

echo json_encode($response);
unset($response);
unset($usuarioM);
