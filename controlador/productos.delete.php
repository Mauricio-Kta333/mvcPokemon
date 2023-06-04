<?php

include_once "../model/producto.php";

$id = $_POST['id'];

$productoM = new \modelo\Producto();

$productoM->setId($id);

$response = $productoM->deleteProducto();

echo json_encode($response);

unset($productoM);
unset($response);