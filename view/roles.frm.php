<?php include_once "header.php"; ?>
<!-- //Formulario  -->
<form id="rolesFrm">
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
            <input class="form-control" type="text" name="txtRol" id="txtRol">
        </div>
        <div class="col-3 align-self-end">
            <input onclick="create()" class="btn btn-primary" type="button" value="Registrar">
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <h1 class="mt-5 mb-3 text-center bg-dark text-white">Roles</h1>
        <div class="col-8">
        <table class="table table-hover bg-light">
  <thead>
    <tr>
      <th scope="col" width="20%">#</th>
      <th scope="col" width="25%">Roles</th>
      <th scope="col" width="25%">Estado</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody id="tableRol">
  </tbody>
</table>
        </div> 
    </div>
    <!-- <a onclick="actualizarEstado()" class="btn btn-outline-success" href="#">Estado</a> -->
</form>
<?php include_once "footer.php"; ?>
<script src="./assets/js/roles.js"></script>