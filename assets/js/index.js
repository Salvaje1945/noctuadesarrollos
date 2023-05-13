import $ from './funciones_globales/elementos_por_id.js'
import dameElAltoDePantalla from './funciones_globales/alto_pantalla.js'
import dameElAnchoDePantalla from './funciones_globales/ancho_pantalla.js'
import carrouselContenido from './carousel.js'
import cabeceraAbrirMenu from './menu.js'
import animacionNosotros from './animaciones/animacion_nosotros.js'
import responsiveMedia from './objeto_responsive.js'

document.addEventListener('DOMContentLoaded', ()=> {
    const anchoDePantallaInicial = dameElAnchoDePantalla()
    animacionNosotros(anchoDePantallaInicial)
    responsiveMedia('#cabecera', '(min-width: 768px)', `<div class="cabecera__contenido--moviles" id="cabecera-contenido">
    <nav class="cabecera__desplegable--menu" id="cabecera-menu-desp">
        <ul>
            <li><a href="#contenido-sobre-nosotros" id="menu-mov-nosotros">Sobre Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Presupueste su proyecto</a></li>
            <li><a href="#">Contáctenos</a></li>
            <li><a href="#">Blog</a></li>
            <li><div>
                <span><i class="fa-brands fa-linkedin"></i></span>
                <span><i class="fa-brands fa-square-instagram"></i></span>
                <span><i class="fa-brands fa-square-github"></i></span>
            </div></li>
        </ul>
    </nav>
    <div class="cabecera__moviles--logo">
        <img src="assets/img/logo_noctua-01.png" alt="Noctua Desarrollos" />
        <div class="cabecera__moviles--titulo">
            <h1>NOCTUA <span>desarrollos</span></h1>
        </div>
    </div>
    <div class="cabecera__moviles--btn activo" id="cabecera-menu-abrir"><i class="fa-solid fa-bars"></i></div>
    <div class="cabecera__moviles--btn" id="cabecera-menu-cerrar"><i class="fa-solid fa-xmark"></i></div>
</div>`, `<div class="cabecera__contenido">
<div class="cabecera__contenido--logo">
    <img src="assets/img/logo_noctua-01.png" alt="Noctua Desarrollos" />
    <div class="cabecera__logo--titulo">
        <h1>NOCTUA <span>desarrollos</span></h1>
    </div>
</div>
<nav class="cabecera__contenido--menu">
    <ul>
        <li><a href="#contenido-sobre-nosotros" id="menu-dkp-nosotros">Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contáctenos</a></li>
        <li><a href="#">Blog</a></li>
    </ul>
</nav>
</div>`)
})

window.addEventListener('resize', ()=> {
    const anchoDePantalla = dameElAnchoDePantalla()
    animacionNosotros(anchoDePantalla)
    
})

// $('#cabecera-menu-abrir').onclick = cabeceraAbrirMenu

// $('#cabecera-menu-abrir').addEventListener('click', cabeceraAbrirMenu)

carrouselContenido()