<?php

include_once "../model/rol.php";
$rolM = new \modelo\Rol();
$response = $rolM->read();
unset($rolM);
echo json_encode($response);

