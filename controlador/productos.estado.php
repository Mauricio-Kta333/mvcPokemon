<?php

include_once "../model/producto.php";

$id = $_POST['id'];
$estado = $_POST['estado'];
if ($estado == 'A'){
    $estado = 'I';
}else{
    $estado = 'A';
}

$productoM = new \modelo\Producto();

$productoM->setId($id);
$productoM->setEstado($estado);

$response = $productoM->estadoProducto();

echo json_encode($response);
unset($productoM);
unset($response);

