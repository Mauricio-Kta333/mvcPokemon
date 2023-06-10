<?php

include_once "../model/usuario.php";

$tipoDoc = $_POST['selTipoDoc'];
$identificacion = $_POST['numIdentificacion'];
$nombre = $_POST['txtNombre'];
$apellido = $_POST['txtApellido'];
$correo = $_POST['txtCorreo'];
$direccion = $_POST['txtDireccion'];
$telefono = $_POST['txtTelefono'];
$genero = $_POST['selGenero'];
$id = $_POST['id'];

$usuarioM = new \modelo\Usuario();

$usuarioM->setTipoDoc($tipoDoc);
$usuarioM->setIdentificacion($identificacion);
$usuarioM->setNombre($nombre);
$usuarioM->setApellido($apellido);
$usuarioM->setCorreo($correo);
$usuarioM->setDireccion($direccion);
$usuarioM->setTelefono($telefono);
$usuarioM->setGenero($genero);
$usuarioM->setId($id);

$response = $usuarioM->updateUsuario();

echo json_encode($response);

unset($usuarioM);
unset($response);
