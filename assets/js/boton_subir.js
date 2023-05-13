import $ from './funciones_globales/elementos_por_id.js'

export default function mostrarBotonSubir() {
    $('#contenedor-subir').classList.add('activo')
    
    function cerrarBotonSubir() {
        $('#contenedor-subir').classList.remove('activo')
    }

    $('#accion-subir').onclick = cerrarBotonSubir
}