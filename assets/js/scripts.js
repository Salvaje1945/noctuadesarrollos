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
    // return Math.max(
    //     document.documentElement.clientHeight,
    //     window.innerHeight || 0,
    //     document.body.clientHeight || 0
    // )
    return window.screen.height;
}
  
function cambioDeTamanio() {
    const anchoDePantalla = dameElAnchoDePantalla()
    const altoDePantalla = dameElAltoDePantalla()
    console.log("El ancho del viewport es: " + anchoDePantalla)
    console.log("El alto del viewport es: " + altoDePantalla)
}
  
window.addEventListener('resize', cambioDeTamanio)
  
const anchoDePantalla = dameElAnchoDePantalla()
console.log("El ancho del viewport es: " + anchoDePantalla)
const altoDePantalla = dameElAltoDePantalla()
console.log("El alto del viewport es: " + altoDePantalla)

// function getScreenHeight() {
//     return window.screen.height;
// }
  
// const screenHeight = getScreenHeight();
// console.log("La altura de la pantalla es: " + screenHeight);

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

window.addEventListener('scroll', function() {

    function animacionNosotros() {

        const alturaCabecera = $('#cabecera').offsetHeight

        const alturaCarrousel = $('#contenido-carrousel-contenedor').offsetHeight

        const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel

        console.log('Altura de la CABECERA: ' + alturaCabecera)
        console.log('Altura del contenedor del CARROUSEL: ' + alturaCarrousel)
        console.log('Suma de altura de CABECERA y CARROUSEL: ' + sumaAlturaCabezaMasCarrusel)

        let scrollActual = window.pageYOffset || document.documentElement.scrollTop
        console.log('Valor "scrollActual": ' + scrollActual)

        let porcentajeScroll = (scrollActual * 100) / sumaAlturaCabezaMasCarrusel

        let posicionElemento = porcentajeScroll - 100
        
        console.log('Porcentaje de ubicación ideal altura recorrido por el scroll: ' + porcentajeScroll)

        console.log('La posición del título: ' + posicionElemento)

        $('#nosotros-cabecera-titulo').style.left= posicionElemento + "%"

        $('#nosotros-contenido-texto').style.right= posicionElemento + "%"

        if(scrollActual >= sumaAlturaCabezaMasCarrusel) {
            $('#nosotros-cabecera-titulo').style.left = 'auto'
            $('#nosotros-contenido-texto').style.right = 'auto'
            $('#nosotros-cabecera-box').classList.add('fijo')

            // if(scrollActual <= sumaAlturaCabezaMasCarrusel) {
            //     $('#nosotros-cabecera-box').classList.remove('fijo')
            // }
        }

        if(scrollActual <= sumaAlturaCabezaMasCarrusel) {
            $('#nosotros-cabecera-box').classList.remove('fijo')
        }



        // let posicionContenido = $('#nosotros-cabecera-contenido').getBoundingClientRect().top

        // console.log('La posición del contenido: ' + posicionContenido)
        
    }

    animacionNosotros()

})