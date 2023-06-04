<?php

include_once "../model/producto.php";

$productoM = new \modelo\Producto();

$response = $productoM->readProducto();

unset($productoM);

echo json_encode($response);