<?php include_once "header.php"; ?>

<form id="frmUsuario">
    <div class="row my-5 justify-content-end">
        <div class="col-6">
            <h1 class="text-center">Formulario Usuarios</h1>
        </div>
        <div class="col-3 align-self-end">
            <a class="btn btn-outline-primary" onclick="createUsuario()">Registrar</a>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-4">
            <label class="form-label">Tipo Documento:</label>
            <select class="form-control" name="selTipoDoc" id="selTipoDoc">
                <option value="0" selected disabled>Seleccione</option>
                <option value="TI">TI</option>
                <option value="CC">CC</option>
                <option value="NUIP">NUIP</option>
                <option value="DNI">DNI</option>
            </select>
        </div>
        <div class="col-4">
            <label class="form-label">Numero Documento:</label>
            <input type="number" class="form-control" name="numIdentificacion" id="numIdentificacion" >
        </div>
    </div>
    <br>
    <div class="row justify-content-center">
        <div class="col-4">
            <label class="form-label">Nombre:</label>
            <input type="text" class="form-control" name="txtNombre" id="txtNombre" >
        </div>
        <div class="col-4">
            <label class="form-label">Apellido:</label>
            <input type="text" class="form-control" name="txtApellido" id="txtApellido" >
        </div>
    </div>
    <br>
    <div class="row justify-content-center">
        <div class="col-4">
            <label class="form-label">Correo:</label>
            <input type="email" class="form-control" name="txtCorreo" id="txtCorreo" >
        </div>
        <div class="col-4">
            <label class="form-label">Password:</label>
            <input type="password" class="form-control" name="txtPassword" id="txtPassword" >
        </div>
    </div>
    <br>
    <div class="row justify-content-center">
        <div class="col-4">
            <label class="form-label">Direccion:</label>
            <input type="text" class="form-control" name="txtDireccion" id="txtDireccion" >
        </div>
        <div class="col-4">
            <label class="form-label">Telefono:</label>
            <input type="tel" class="form-control" name="txtTelefono" id="txtTelefono" >
        </div>
    </div>
    <br>
    <div class="row justify-content-center">
        <div class="col-4">
            <label class="form-label">Genero:</label>
            <select class="form-control" name="selGenero" id="selGenero">
                <option value="0" selected disabled>Seleccione</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>
        </div>
        <div class="col-4">
            <label class="form-label">Rol:</label>
            <select name="selRol" id="selRol" class="form-control">
                <option value="0" selected disabled>Seleccione</option>
            </select>
        </div>
    </div>
    <div class="row justify-content-center">
        <h1 class="mt-5 mb-3 py-1 text-center bg-dark text-white">Usuarios</h1>
        <div class="col-8">
        <table class="table table-hover bg-light" id="tablaUser">
                <thead>
                    <tr>
                        <th scope="col" width="5%">#</th>
                        <th scope="col" width="5%">Tipo Documento</th>
                        <th scope="col" width="15%">Documento</th>
                        <th scope="col" width="20%">Nombre</th>
                        <th scope="col" width="20%">Apellido</th>
                        <th scope="col" width="10%">Rol</th>
                        <th scope="col" width="10%">Estado</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody id="tableUsuarios">
                </tbody>
            </table>
        </div>
    </div>
    
</form>


<?php include_once "footer.php"; ?>
<script src="./assets/js/usuarios.js"></script>