import $ from '../funciones_globales/elementos_por_id.js'

export default function animacionNosotros(elAncho) {
    
    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido-carrousel-contenedor').offsetHeight

    const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel

    const anchoEjecusion = elAncho

    function ejecutarAnimacion() {

        window.addEventListener('scroll', function () {

            if (anchoEjecusion < 768) {

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

            } else {

                //console.log('acá es mayor a 768, no debería funcar')

                $('#nosotros-cabecera-titulo').style.left = "-100%"

                $('#nosotros-contenido-texto').style.right = "-100%"

                //return
            }
    
        })
    }

    ejecutarAnimacion()

    // if(anchoEjecusion < 768){
    //     ejecutarAnimacion()
    // } else {

    //     console.log('acá es mayor a 768, no debería funcar')

    //     $('#nosotros-cabecera-titulo').style.left = "-100%"
    
    //     $('#nosotros-contenido-texto').style.right = "-100%"

    //     return
    // }

}