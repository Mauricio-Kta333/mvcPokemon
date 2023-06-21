<?php include_once "header.php"; ?>

<div class="row">
    <div class="col-12">
        <label class="form-label">Correo</label>
        <input type="text" name="txtCorreo" id="txtCorreo">
    </div>
    <div class="col-12">
        <label class="form-label">Password</label>
        <input type="text" name="txtPassword" id="txtPassword">
    </div>
    <div class="col-12">
        <a onclick="login()" type="button" class="btn btn.primary" value="registrar">Iniciar</a>
    </div>
</div>
<?php include_once "footer.php"; ?>
<script src="./assets/js/login.js"></script>