document.addEventListener('DOMContentLoaded', () => {
    const menuButtonsMobile = document.querySelectorAll('#nav-mobile a.hidden');
    const menuButtonsDesktop = document.querySelectorAll('#nav-desktop a');
    const titleButton = document.querySelector('h1');
    const openNavButton = document.querySelector('#show-nav');
    const habilities = document.querySelectorAll('.habilities .hability');

    // carga
    window.addEventListener('load', () => {
        hiddenNav();
        onScrollTo(window.location.hash);
    });
    // redimensionar
    window.addEventListener('resize', () => {
        hiddenNav();
    });
    
    // botones version movil
    menuButtonsMobile.forEach(button => {
        const nav = document.querySelector('#nav-mobile');
        button.addEventListener('click', () => {
            hiddenElement(nav);
        })
    });

    // botones version escritorio
    menuButtonsDesktop.forEach(button => {
        button.addEventListener('click', (e) => {
            scrollToElement(e);
        })
    });

    // h1 dirige a about me
    titleButton.addEventListener('click', (e) =>{
        scrollToElement(e);
    });
    
    // boton open menu header
    openNavButton.addEventListener('click', () => {
        const nav = document.querySelector('#nav-mobile');
        visibleElement(nav);
    });

    // mostrar popup cuando se selecciona una habilidad, dando su nombre
    habilities.forEach(hability => {
        const name = hability.querySelector('.name');
        if(name !== null){
            hability.addEventListener('click', () => {
                visibleElement(name);
            });
        }
    });
    
    // ocultar nav
    function hiddenNav(){
        const nav = document.querySelector('#nav-mobile');
        const hash = window.location.hash;
    
        if(hash !== '' && hash !== '#menu'){
            hiddenElement(nav);
        }else{
            visibleElement(nav);
        }
    }
    // añade clase hidden para ocultar elemento
    function hiddenElement(element){
        element.classList.add('hidden');
    }
    // retira clase hidden para mostrar elemento
    function visibleElement(element){
        element.classList.remove('hidden');
    }

    // scroll anulando movimiento brusco del anchor
    function scrollToElement(e){
        e.preventDefault();
        const hash = e.target.getAttribute("href");
        onScrollTo(hash);
    }

    // scroll a el hash dado
    function onScrollTo(hash){
        // se espera un momento a que cargue la pagina
        setTimeout(() => {
            const element = document.querySelector(hash);
    
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
        // se da tiempo al scroll de moverse a su sitio
        setTimeout(() => {
            window.location.hash = hash;
        }, 600);
    }
});