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

function carrouselContenido() {
    
    let indice = 0

    const tarjetas = document.querySelectorAll('.carrousel__slider--slide')

    function tarjetasMovimiento() {

        indice += 1

        if(indice >= tarjetas.length){
            indice = 0
        }

        $('#carrousel-slider').style.transform = "translateX(-" + indice * 33.33 + "%)"

    }

    setInterval(tarjetasMovimiento, 5000)
}

carrouselContenido()