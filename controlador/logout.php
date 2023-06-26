<?php
try {
    session_start();
    session_unset();
    session_destroy();

    echo json_encode(true);
    header("Location: ../view/login.frm.php"); // Redireccionar al archivo login.frm.php
    exit();
} catch (\Throwable $th) {
    echo json_encode(false);
}
