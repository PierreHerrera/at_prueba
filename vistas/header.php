
<div class="container-fluid bg-ligth">
    <div class="container">
        <ul class="nav nav-justified py-2 nav-pills" style="background-color: #F8F9FA;">
            <li class="nav-item">
                <a href="index.php?pagina=recargas" class="nav-link <?php echo ($_GET['pagina'] == 'recargas') ? 'active' : ''; ?>">Recargas</a>
            </li>
            <li class="nav-item">
                <a href="index.php?pagina=clientes" class="nav-link <?php echo ($_GET['pagina'] == 'clientes') ? 'active' : ''; ?>">Clientes</a>
            </li>
            <li class="nav-item">
                <a href="index.php?pagina=bancos" class="nav-link <?php echo ($_GET['pagina'] == 'bancos') ? 'active' : ''; ?>">Bancos</a>
            </li>
            <li class="nav-item ">
                <a href="index.php?pagina=reporte" class="nav-link <?php echo ($_GET['pagina'] == 'reporte') ? 'active' : ''; ?>">Reporte</a>
            </li>
        </ul>
    </div>
</div>