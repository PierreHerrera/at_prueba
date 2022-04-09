/* global baseurl, ciCsrfToken, moment */

$(function () {

    obtener_clientes();

    $('#btn_buscar').click(function () {
        obtener_clientes();
    });
    $('#btn_nuevo').click(function () {
        nuevo();
    });
    $('#btn_guardar').click(function () {
        guardar();
    });
    $('#btn_eliminar').click(function () {
        eliminar();
    });
});

function obtener_clientes() {
    $('#tbl_clientes').html(
            '<thead>'
            + '<tr>'
            + ' <th>#</th>'
            + ' <th>Player-ID</th>'
            + ' <th>Cliente</th>'
            + ' <th>Tipo Doc.</th>'
            + ' <th>Núm. Doc.</th>'
            + ' <th>Celular</th>'
            + ' <th>Correo</th>'
            + ' <th>Editar</th>'
            + '</tr>'
            + '</thead>'
            + '<tbody>'
            );
    var texto = $('#texto').val();

    $.post('./controladores/Cliente.php?action=obtener_clientes', {
        texto: texto
    })
            .done(function (data) {
                try {
                    var dato = JSON.parse(data);
                    if (dato.length > 0) {
                        $.each(dato, function (index, item) {
                            var parametros = "'" + item.id_cliente + "','" + item.id_player + "','" +
                                    item.nombres + "','" + item.apellidos + "','" +
                                    item.id_tipo_documento + "','" + item.num_documento + "','" +
                                    item.celular + "','" + item.correo + "'";
                            $('#tbl_clientes').append(
                                    '<tr>' +
                                    '<td class="text-center">' + (index + 1) + '</td>' +
                                    '<td class="text-center">' + item.id_player + '</td>' +
                                    '<td class="text-center">' + item.nombres + ' ' + item.apellidos + '</td>' +
                                    '<td class="text-center">' + item.tipo_documento + '</td>' +
                                    '<td class="text-center">' + item.num_documento + '</td>' +
                                    '<td class="text-center">' + item.celular + '</td>' +
                                    '<td class="text-center">' + item.correo + '</td>' +
                                    '<td class="text-center">' +
                                    '   <div class="btn-group">' +
                                    '       <button class="btn btn-primary" title="Editar" style="padding: 0px 12px 0px 12px;" ' +
                                    '           onclick="modal_cliente(' + parametros + ')" >' +
                                    '           <i class="fa-solid fa-edit" style="font-size: 1em;color:white;"></i>' +
                                    '       </button>' +
                                    '       <button class="btn btn-primary" title="Eliminar" style="padding: 0px 12px 0px 12px;" ' +
                                    '           onclick="modal_eliminar(' + item.id_cliente + ')" >' +
                                    '           <i class="fa-solid fa-trash" style="font-size: 1em;color:white;"></i>' +
                                    '       </button>' +
                                    '   </div>' +
                                    '</td>' +
                                    '</tr>'
                                    );
                        });
                    } else {
                        $('#tbl_clientes').append('<tr><td colspan="8" class="text-center">Sin resultados ...</td></tr>');
                    }
                } catch (e) {
                    console.log("Error de TRY-CATCH -- Error: " + e);
                }
            })
            .fail(function (xhr, status, error) {
                console.log("Error de .FAIL -- Error: " + error);
            });
}


//***************************************************************************************************************************************************************
//***************************************************************************************************************************************************************
// MODAL    *****************************************************************************************************************************************************
//***************************************************************************************************************************************************************
//***************************************************************************************************************************************************************
var cod_cliente = 0;
function nuevo() {
    cod_cliente = 0;
    $('#id_player').val('');
    $('#nombres').val('');
    $('#apellidos').val('');
    $('#tipo_doc').val('1');
    $('#num_doc').val('');
    $('#celular').val('');
    $('#correo').val('');

    $("#modal_cliente").modal('show');
}
function guardar() {
    $('#btn_guardar').hide();

    var id_player = $('#id_player').val();
    var nombres = $('#nombres').val();
    var apellidos = $('#apellidos').val();
    var tipo_doc = $('#tipo_doc').val();
    var num_doc = $('#num_doc').val();
    var celular = $('#celular').val();
    var correo = $('#correo').val();

    if (!((id_player.length) > 0)) {
        $('#btn_guardar').show();
        return false;
    }
    if (!((nombres.length) > 0)) {
        $('#btn_guardar').show();
        return false;
    }
    if (!((apellidos.length) > 0)) {
        $('#btn_guardar').show();
        return false;
    }
    if (!((num_doc.length) > 0)) {
        $('#btn_guardar').show();
        return false;
    }
    if (!((celular.length) > 0)) {
        $('#btn_guardar').show();
        return false;
    }
    if (!((correo.length) > 0)) {
        $('#btn_guardar').show();
        return false;
    }

    var parametros = {
        "cod_cliente": cod_cliente,
        "id_player": id_player,
        "nombres": nombres,
        "apellidos": apellidos,
        "tipo_doc": tipo_doc,
        "num_doc": num_doc,
        "celular": celular,
        "correo": correo
    };
    $.ajax({
        data: parametros,
        url: './controladores/Cliente.php?action=guardar',
        type: 'POST',
        success: function (result) {
            var resultado = $.trim(result);
            if (parseInt(resultado) > 0) {
                $("#modal_cliente").modal('hide');
                alert('Exito !!!');
                obtener_clientes();
            } else {
                alert(resultado);
            }
            $('#btn_guardar').show();
        },
        error: function (result) {
            alert('Error');
            $('#btn_guardar').show();
        }
    });
}
function modal_cliente(codigo, id_player, nombres, apellidos, id_tipo_documento, num_documento, celular, correo) {
    cod_cliente = codigo;
    $('#id_player').val('');
    $('#nombres').val('');
    $('#apellidos').val('');
    $('#tipo_doc').val('1');
    $('#num_doc').val('');
    $('#celular').val('');
    $('#correo').val('');
    $('#id_player').val(id_player);
    $('#nombres').val(nombres);
    $('#apellidos').val(apellidos);
    $('#tipo_doc').val(id_tipo_documento);
    $('#num_doc').val(num_documento);
    $('#celular').val(celular);
    $('#correo').val(correo);

    $("#modal_cliente").modal('show');
}
function modal_eliminar(codigo) {
    cod_cliente = codigo;
    $("#modal_eliminar").modal('show');
}
function eliminar() {
    $('#btn_eliminar').hide();
    var parametros = {
        "cod_cliente": cod_cliente
    };
    $.ajax({
        data: parametros,
        url: './controladores/Cliente.php?action=eliminar',
        type: 'POST',
        success: function (result) {
            var resultado = $.trim(result);
            if (parseInt(resultado) > 0) {
                $("#modal_eliminar").modal('hide');
                alert('Exito !!!');
                obtener_clientes();
            } else {
                alert(resultado);
            }
            $('#btn_eliminar').show();
        },
        error: function (result) {
            alert('Error');
            $('#btn_eliminar').show();
        }
    });
}