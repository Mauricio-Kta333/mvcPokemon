<?php include_once "header.php"; ?>
<!-- //Formulario  -->
<form action="#" method="post" id="rolesFrm">
    <div class="row my-5">
        <div class="col-12">
            <!-- Formulario -->
            <h1 class="text-center">Formulario Roles</h1>
            <!-- //Fin -->
        </div>
    </div>
    <div class="row d-flex justify-content-end">
        <div class="col-6">
            <label class="form-label" for="">Nombre del Rol:</label>
            <input class="form-control" type="text" name="txtNombre" id="txtNommbre">
        </div>
        <div class="col-3 align-self-end">
            <input class="btn btn-primary" type="submit" value="Registrar">
        </div>
    </div>
</form>
<?php include_once "footer.php"; ?>
<script src="./assets/js/roles.js"></script>