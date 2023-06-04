<?php

include_once "../model/producto.php";

$nombrePro = $_POST["txtProducto"];
$precioPro = $_POST["numProducto"];
$cantidadPro = $_POST["numProCantidad"];
$descriPro = $_POST["txtDescripcion"];

$productoM = new \modelo\Producto();

$productoM->setNombrePro($nombrePro);
$productoM->setPrecioPro($precioPro);
$productoM->setCantidadPro($cantidadPro);
$productoM->setDescriPro($descriPro);

$response = $productoM->createProducto();

echo json_encode($response);

unset($productoM);
