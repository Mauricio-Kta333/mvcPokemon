<?php

include_once "../model/producto.php";

$id = $_GET['id'];

$productoM = new \modelo\Producto();

$productoM->setId($id);
$response = $productoM->readIdProducto();

echo json_encode($response);

unset($productoM);
unset($response);
