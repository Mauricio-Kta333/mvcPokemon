<?php include_once "header.php"; ?>
<!-- //Formulario  -->
<form id="ProductosFrm">
    <div class="row my-5">
        <div class="col-12">
            <!-- Formulario -->
            <h1 class="text-center">Formulario Producto</h1>
            <!-- //Fin -->
        </div>
    </div>
    <div class="w-50 mt-3" style="margin: 0 auto;">
        <div class="justify-content-center">
            <label class="form-label" for="">Nombre del Producto:</label>
            <input class="form-control" type="text" name="txtProducto" id="txtProducto">
            <br>
        </div>
        <div class="justify-content-center">
            <label class="form-label" for="">Precio del Producto:</label>
            <input class="form-control" type="number" name="numProducto" id="numProducto">
            <br>
        </div>
        <div class="justify-content-center">
            <label class="form-label" for="">Cantidad del Producto:</label>
            <input class="form-control" type="number" name="numProCantidad" id="numProCantidad">
            <br>
        </div>
        <div class="justify-content-center">
            <label class="form-label">Descripcion del Producto:</label>
            <textarea name="txtDescripcion" id="txtDescripcion" type="text" class="form-control" cols="173" rows="2"></textarea>
            <br>        
        </div>
        <div class="text-center">
            <a onclick="createProducto()" class="btn btn-outline-success" type="button" ><i class="fa-solid fa-circle-plus fa-bounce"></i> Registrar</a>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <h1 class="mt-5 mb-3 text-center bg-dark text-white">Productos</h1>
        <div class="col-8">
            <table class="table table-hover bg-light" id="tablaPro">
                <thead>
                    <tr>
                        <th scope="col" width="5%">#</th>
                        <th scope="col" width="25%">Producto</th>
                        <th scope="col" width="15%">Precio</th>
                        <th scope="col" width="10%">Cantidad</th>
                        <th scope="col" width="25%">Descripcion</th>
                        <th scope="col" width="10%">Estado</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody id="tableProducto">
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <!-- Button trigger modal -->


        <!-- Modal -->
        <div class="modal fade" id="updateModalPro" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-gradient bg-warning">
                        <h5 class="modal-title col-11 text-center ms-4" id="updateModalLabel">Modal Producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row justify-content-center">
                            <div class="col-6 justify-content-center">
                                <label class="form-label" for="">Nombre del Producto:</label>
                                <input class="form-control" type="text" name="txtProductoUpdate" id="txtProductoUpdate">
                            </div>
                            <div class="col-6 justify-content-center">
                                <label class="form-label" for="">Precio del Producto:</label>
                                <input class="form-control" type="number" name="numProductoUpdate" id="numProductoUpdate">
                            </div>
                            <div class="col-6 justify-content-center">
                                <label class="form-label" for="">Cantidad del Producto:</label>
                                <input class="form-control" type="number" name="numProCantidadUpdate" id="numProCantidadUpdate">
                            </div>
                            <div class="col-6 justify-content-center">
                                <label class="form-label" for="">Descripcion del Producto:</label>
                                <textarea name="txtDescripcionUpdate" id="txtDescripcionUpdate" type="text" class="form-control" cols="173" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button onclick="updateProducto()" type="button" class="btn btn-outline-warning" data-bs-dismiss="modal">Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="deleteModalPro" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-gradient bg-danger">
                        <h5 class="modal-title col-11 text-center ms-4" id="exampleModalLabel">Modal Eliminar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="text-center fw-bold" id="idEliminarProducto"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        <button onclick="deleteProducto()" type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <a onclick="actualizarEstado()" class="btn btn-outline-success" href="#">Estado</a> -->
</form>
<?php include_once "footer.php"; ?>
<script src="./assets/js/productos.js"></script>