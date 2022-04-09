<?php

class Conexion {

    public static function poo() {
        $cnx = new mysqli("localhost", "root", "", "apuesta_total");
        return $cnx;
    }

}
