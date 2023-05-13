import $ from './funciones_globales/elementos_por_id.js'
import mostrarBotonSubir from './boton_subir.js'

export default function cabeceraAbrirMenu() {
    $('#cabecera-menu-abrir').classList.remove('activo')
    $('#cabecera-menu-cerrar').classList.add('activo')
    $('#cabecera-menu-desp').classList.add('activo')

    function cabeceraCerrarMenu() {
        $('#cabecera-menu-abrir').classList.add('activo')
        $('#cabecera-menu-cerrar').classList.remove('activo')
        $('#cabecera-menu-desp').classList.remove('activo')
    }

    $('#cabecera-menu-cerrar').onclick = cabeceraCerrarMenu
    $('#menu-mov-nosotros').onclick = function(){
        cabeceraCerrarMenu()
        mostrarBotonSubir()
    }
}