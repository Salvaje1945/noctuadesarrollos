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
  
function cambioDeTamanio() {
    const anchoDePantalla = dameElAnchoDePantalla()
    console.log("El ancho del viewport es: " + anchoDePantalla)
}
  
window.addEventListener("resize", cambioDeTamanio)
  
const anchoDePantalla = dameElAnchoDePantalla()
console.log("El ancho del viewport es: " + anchoDePantalla)

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