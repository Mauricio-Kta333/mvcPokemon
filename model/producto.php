<?php

namespace modelo;

use Exception;
use PDOException;

include_once "conexion.php";

class Producto {
    private $id;
    private $nombrePro;
    private $precioPro;
    private $cantidadPro;
    private $descriPro;
    private $estado;
    public $conexion;

    function __construct(){
        $this->conexion = new \Conexion();

    }
    
    function createProducto()
    {
        try {
            $sql = $this->conexion->getCon()->prepare("INSERT INTO producto(nombrePro,precioPro,cantidadPro,descriPro,estado) VALUES (?,?,?,?,'A')");
            $sql->bindParam(1,$this->nombrePro);
            $sql->bindParam(2,$this->precioPro);
            $sql->bindParam(3,$this->cantidadPro);
            $sql->bindParam(4,$this->descriPro);
            $sql->execute();
            return "Producto Agregado Correctamente";
        } catch (PDOException $e) {
            return "Error: ".$e->getMessage();
        }
    }

    function readProducto()
    {
        try {
            $sql = $this->conexion->getCon()->prepare("SELECT * FROM producto");
            $sql->execute();
            $response = $sql->fetchAll(\PDO::FETCH_ASSOC);
            return $response;
        } catch (PDOException $e) {
            return "Error: ".$e->getMessage();
        }
    }

    function updateProducto()
    {
        try {
            $sql = $this->conexion->getCon()->prepare("UPDATE producto SET nombrePro=?, precioPro=?, cantidadPro=?, descriPro=? WHERE id=?");
            $sql->bindParam(1, $this->nombrePro);
            $sql->bindParam(2, $this->precioPro);
            $sql->bindParam(3, $this->cantidadPro);
            $sql->bindParam(4, $this->descriPro);
            $sql->bindParam(5, $this->id);
            $sql->execute();
            return "Producto modificado";
        } catch (PDOException $e) {
            return "Error: ".$e->getMessage();
        }
    }

    function deleteProducto()
    {
        try {
            $sql = $this->conexion->getCon()->prepare("DELETE  FROM producto WHERE id = ?");
            $sql->bindParam(1, $this->id);
            $sql->execute();
            return "Producto Eliminado Correctamente";
        } catch (PDOException $e) {
            return "Error: ".$e->getMessage();
        }
    }

    function readIdProducto()
    {
        try {
            $sql = $this->conexion->getCon()->prepare("SELECT * FROM producto WHERE id=?");
            $sql->bindParam(1, $this->id);
            $sql->execute();
            $response = $sql->fetchAll(\PDO::FETCH_ASSOC);
            return $response;
        } catch (PDOException $e) {
            return "Error: ".$e->getMessage();
        }
    }

    function estadoProducto()
    {
        try {
            $sql = $this->conexion->getCon()->prepare("UPDATE producto SET estado = ? where id = ?");
            $sql->bindParam(1, $this->estado);
            $sql->bindParam(2, $this->id);
            $sql->execute();
            return "Estado Modificado";
        } catch (PDOException $e) {
            return "Error: ".$e->getMessage();
        }
    }

    /**
     * Get the value of descriPro
     */ 
    public function getDescriPro()
    {
        return $this->descriPro;
    }

    /**
     * Set the value of descriPro
     *
     * @return  self
     */ 
    public function setDescriPro($descriPro)
    {
        $this->descriPro = $descriPro;

        return $this;
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of nombrePro
     */ 
    public function getNombrePro()
    {
        return $this->nombrePro;
    }

    /**
     * Set the value of nombrePro
     *
     * @return  self
     */ 
    public function setNombrePro($nombrePro)
    {
        $this->nombrePro = $nombrePro;

        return $this;
    }

    /**
     * Get the value of precioPro
     */ 
    public function getPrecioPro()
    {
        return $this->precioPro;
    }

    /**
     * Set the value of precioPro
     *
     * @return  self
     */ 
    public function setPrecioPro($precioPro)
    {
        $this->precioPro = $precioPro;

        return $this;
    }

    /**
     * Get the value of estado
     */ 
    public function getEstado()
    {
        return $this->estado;
    }

    /**
     * Set the value of estado
     *
     * @return  self
     */ 
    public function setEstado($estado)
    {
        $this->estado = $estado;

        return $this;
    }

    /**
     * Get the value of cantidadPro
     */ 
    public function getCantidadPro()
    {
        return $this->cantidadPro;
    }

    /**
     * Set the value of cantidadPro
     *
     * @return  self
     */ 
    public function setCantidadPro($cantidadPro)
    {
        $this->cantidadPro = $cantidadPro;

        return $this;
    }
}