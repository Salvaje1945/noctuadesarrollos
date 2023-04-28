function $ (id) {
    return document.querySelector(id)
}

function cabeceraAbrirMenu() {
    $('#cabecera-menu-abrir').classList.remove('activo')
    $('#cabecera-menu-cerrar').classList.add('activo')
    $('#cabecera-menu-desp').classList.add('activo')
}

function cabeceraCerrarMenu() {
    $('#cabecera-menu-abrir').classList.add('activo')
    $('#cabecera-menu-cerrar').classList.remove('activo')
    $('#cabecera-menu-desp').classList.remove('activo')
}

$('#cabecera-menu-abrir').onclick = cabeceraAbrirMenu
$('#cabecera-menu-cerrar').onclick = cabeceraCerrarMenu