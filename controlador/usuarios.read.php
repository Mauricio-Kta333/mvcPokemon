<?php

include_once "../model/usuario.php";
$usuarioM = new \modelo\Usuario();
$response = $usuarioM->readUsuario();
unset($usuarioM);
echo json_encode($response);

