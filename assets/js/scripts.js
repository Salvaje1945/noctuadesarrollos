function $ (id) {
    return document.querySelector(id)
}

function dameElAnchoDePantalla() {
    return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
        document.body.clientWidth || 0
    )
}

function dameElAltoDePantalla() {
    return window.screen.height
}



function animacionNosotros(elAncho) {
    
    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido-carrousel-contenedor').offsetHeight

    const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel

    const anchoEjecusion = elAncho

    function ejecutarAnimacion() {
        window.addEventListener('scroll', function () {

            let scrollActual = window.pageYOffset || document.documentElement.scrollTop
    
            let porcentajeScroll = (scrollActual * 100) / sumaAlturaCabezaMasCarrusel
    
            let posicionElemento = porcentajeScroll - 100
    
            $('#nosotros-cabecera-titulo').style.left = posicionElemento + "%"
    
            $('#nosotros-contenido-texto').style.right = posicionElemento + "%"
    
            if (scrollActual >= sumaAlturaCabezaMasCarrusel) {
                $('#nosotros-cabecera-titulo').style.left = 'auto'
                $('#nosotros-contenido-texto').style.right = 'auto'
                $('#nosotros-cabecera-box').classList.add('fijo')
            }
    
            if (scrollActual <= sumaAlturaCabezaMasCarrusel) {
                $('#nosotros-cabecera-box').classList.remove('fijo')
            }
    
        })
    }

    if(anchoEjecusion < 768){
        ejecutarAnimacion()
    } else {
        return
    }

}

//animacionNosotros()

document.addEventListener('DOMContentLoaded', ()=> {
    const anchoDePantallaInicial = dameElAnchoDePantalla()
    animacionNosotros(anchoDePantallaInicial)
})

window.addEventListener('resize', ()=> {
    const anchoDePantalla = dameElAnchoDePantalla()
    animacionNosotros(anchoDePantalla)
    
})

function cabeceraAbrirMenu() {
    $('#cabecera-menu-abrir').classList.remove('activo')
    $('#cabecera-menu-cerrar').classList.add('activo')
    $('#cabecera-menu-desp').classList.add('activo')

    function cabeceraCerrarMenu() {
        $('#cabecera-menu-abrir').classList.add('activo')
        $('#cabecera-menu-cerrar').classList.remove('activo')
        $('#cabecera-menu-desp').classList.remove('activo')
    }

    function mostrarBotonSubir() {
        $('#contenedor-subir').classList.add('activo')
        
        function cerrarBotonSubir() {
            $('#contenedor-subir').classList.remove('activo')
        }

        $('#accion-subir').onclick = cerrarBotonSubir
    }

    $('#cabecera-menu-cerrar').onclick = cabeceraCerrarMenu
    $('#menu-mov-nosotros').onclick = function(){
        cabeceraCerrarMenu()
        mostrarBotonSubir()   
    }

}

$('#cabecera-menu-abrir').onclick = cabeceraAbrirMenu


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