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

    const anchoTarjetasPx = tarjetas[0].clientWidth

    const anchoTarjetas = (anchoTarjetasPx * 100) / 1068

    console.log(anchoTarjetas)

    function tarjetasMovimiento() {

        indice += 1

        if(indice >= tarjetas.length){
            indice = 0
        }

        $('#carrousel-slider').style.transform = "translateX(-" + indice * anchoTarjetas + "%)"

        /*

        let posicion = indice * anchoTarjetas

        if(posicion === 0){
            if($('#carrousel-slider').classList.contains('segundo')){
                $('#carrousel-slider').classList.replace('segundo', 'primero')
            }
            if($('#carrousel-slider').classList.contains('tercero')){
                $('#carrousel-slider').classList.replace('tercero', 'primero')
            }
        }

        if(posicion === 1){
            if($('#carrousel-slider').classList.contains('primero')){
                $('#carrousel-slider').classList.replace('primero', 'segundo')
            }
            if($('#carrousel-slider').classList.contains('tercero')){
                $('#carrousel-slider').classList.replace('tercero', 'segundo')
            }
        }

        if(posicion === 2){
            if($('#carrousel-slider').classList.contains('segundo')){
                $('#carrousel-slider').classList.replace('segundo', 'tercer')
            }
            if($('#carrousel-slider').classList.contains('tercero')){
                $('#carrousel-slider').classList.replace('tercero', 'primero')
            }
        }
        */

    }

    setInterval(tarjetasMovimiento, 5000)
}

carrouselContenido()