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

    function cabeceraMoviles() {
        if(anchoDePantalla <= 767) {
            $('#cabecera-contenido').innerHTML = `<nav class="cabecera__desplegable--menu" id="cabecera-menu-desp">
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
        <div class="cabecera__moviles--btn" id="cabecera-menu-cerrar"><i class="fa-solid fa-xmark"></i></div>`
    
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
        } else {
            $('#cabecera-contenido').innerText = 'Hola'
        }
    
        
    }
    
    cabeceraMoviles()
}
  
window.addEventListener("resize", cambioDeTamanio)
  
const anchoDePantalla = dameElAnchoDePantalla()
console.log("El ancho del viewport es: " + anchoDePantalla)

/*
function cabeceraMoviles() {
    if(anchoDePantalla <= 767) {
        $('#cabecera-contenido').innerHTML = `<nav class="cabecera__desplegable--menu" id="cabecera-menu-desp">
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
    <div class="cabecera__moviles--btn" id="cabecera-menu-cerrar"><i class="fa-solid fa-xmark"></i></div>`

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
    } else {
        $('#cabecera-contenido').innerText = 'Hola'
    }

    
}

cabeceraMoviles()


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
*/

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