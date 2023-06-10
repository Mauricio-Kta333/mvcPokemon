<?php

include_once "../model/usuario.php";

$id = $_POST['id'];

$usuarioM = new \modelo\Usuario();

$usuarioM->setId($id);

$response = $usuarioM->deleteUsuario();

echo json_encode($response);

unset($usuarioM);
unset($response);