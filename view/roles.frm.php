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
            <input onclick="create()" class="btn btn-outline-primary" type="button" value="Registrar">
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
    <div class="row">
        <!-- Button trigger modal -->


        <!-- Modal -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-gradient bg-warning">
                        <h5 class="modal-title col-11 text-center ms-4" id="updateModalLabel">Modal Rol</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row justify-content-center">
                            <div class="col-6 justify-content-center">
                                <label class="form-label" for="">Nombre del Rol:</label>
                                <input class="form-control" type="text" name="txtRolUpdate" id="txtRolUpdate">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button onclick="update()" type="button" class="btn btn-outline-warning" data-bs-dismiss="modal">Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-gradient bg-danger">
                        <h5 class="modal-title" id="exampleModalLabel">Modal Eliminar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <a onclick="actualizarEstado()" class="btn btn-outline-success" href="#">Estado</a> -->
</form>
<?php include_once "footer.php"; ?>
<script src="./assets/js/roles.js"></script>