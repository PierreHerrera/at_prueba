<?php

class Mrecarga {

    private $db;
    private $bancos;

    public function __construct() {
        $this->db = Conexion::poo();
        $this->bancos = array();
    }

    public function obtener_detalle($id_player) {
        $query = "
        SELECT
            id_cliente codigo,
            id_player,
            id_tipo_documento,
            ( CASE id_tipo_documento WHEN 1 THEN 'DNI' ELSE 'CARNET DE EXTRANJERIA' END ) tipo_documento,
            num_documento,
            nombres,
            apellidos,
            celular,
            correo,
            estado 
        FROM
                tbl_cliente
        WHERE estado = 1 AND id_player = $id_player 
        ORDER BY id_cliente ASC
        LIMIT 1
        ";
        $res_query = $this->db->query($query);
        $this->bancos['http_code'] = 400;
        while ($rows = $res_query->fetch_assoc()) {
            $this->bancos['http_code'] = 200;
            $this->bancos['cliente'] = $rows;
            $id_cliente = $this->bancos['cliente']['codigo'];
            $query_tra = "
            SELECT
                t.id_transaccion,
                t.id_canal,
                ( CASE t.id_canal WHEN 1 THEN 'Whatsapp' ELSE 'Telegram' END ) canal,
                t.id_banco,
                b.nombre_banco,
                t.monto,
                t.voucher,
                t.estado,
                t.fecha_hora_registro
            FROM
                tbl_transaccion t
                JOIN tbl_banco b ON b.id_banco = t.id_banco
            WHERE t.estado = 1 AND t.id_cliente = $id_cliente 
            ";
            $res_query_tra = $this->db->query($query_tra);
            $this->bancos['trans'] = array();
            while ($rows = $res_query_tra->fetch_assoc()) {
                $this->bancos['trans'][] = $rows;
            }
        }

        return $this->bancos;
    }

    public function guardar_recarga($param) {
        $sql_guardar = "
INSERT INTO tbl_transaccion (
id_cliente,
id_canal,
id_banco,
monto,
voucher,
estado,
fecha_hora_registro
) VALUES (
'" . $param['cod_cliente'] . "',
'" . $param['canal'] . "',
'" . $param['banco'] . "',
'" . $param['monto'] . "',
'" . $param['voucher'] . "',
1,
now()
);
";
        $this->db->query($sql_guardar);
        return 1;
    }

    public function editar_recarga($param) {
        $sql_guardar = "
UPDATE tbl_transaccion 
SET 
id_canal='" . $param['canal'] . "',
id_banco='" . $param['banco'] . "',
monto='" . $param['monto'] . "'
WHERE id_transaccion='" . $param['cod_recarga'] . "'
";
        $this->db->query($sql_guardar);
        return 1;
    }

    public function eliminar_recarga($cod_recarga) {
        $sql_eliminar = "
UPDATE tbl_transaccion 
SET estado=0 
WHERE id_transaccion='" . $cod_recarga . "' 
";
        $this->db->query($sql_eliminar);
        return 1;
    }

}
