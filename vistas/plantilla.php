<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Apuesta total</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


        <link href="./assets/fontawesome_free_6.1.1_web/css/fontawesome.css" rel="stylesheet">
        <link href="./assets/fontawesome_free_6.1.1_web/css/brands.css" rel="stylesheet">
        <link href="./assets/fontawesome_free_6.1.1_web/css/solid.css" rel="stylesheet">
    </head>
    <body>

        <div class="container-fluid">
            <h3 class="text-center py-3">Apuesta total: Caso Práctico - Depósito de Recargas</h3>
        </div>

        <?php require_once 'header.php'; ?>

        <div class="container-fluid">
            <div class="container py-5">
                <?php
                if (isset($_GET['pagina'])) {
                    if ($_GET['pagina'] == "recargas" ||
                            $_GET['pagina'] == "clientes" ||
                            $_GET['pagina'] == "bancos" ||
                            $_GET['pagina'] == "reporte") {
                        include 'paginas/reg_' . $_GET["pagina"] . '.php';
                    } else {
                        include 'paginas/error404.php';
                    }
                } else {
                    include 'paginas/reg_recargas.php';
                    $_GET['pagina'] = "recargas";
                }
                ?>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/68cce17049.js" crossorigin="anonymous"></script>
        <script src="./assets/jquery/jquery.min.js"></script>
        <script>
            var fecha_hoy = '<?php echo date('d/m/Y'); ?>';
        </script>
        <script src="vistas/js/<?php echo $_GET["pagina"] . ".js?v=" . date('YmdHis'); ?>"></script>
    </body>
</html>