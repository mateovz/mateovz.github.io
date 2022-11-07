document.addEventListener('DOMContentLoaded', () => {
    const DESKTOP = 1024;

    const menuButtons = document.querySelectorAll('nav a.hidden');
    const openNavButton = document.querySelector('#show-nav');
    
    // carga
    window.addEventListener('load', () => {
        hiddenNav();
    });
    // redimensionar
    window.addEventListener('resize', () => {
        hiddenNav();
    });
    
    // botones version movil
    menuButtons.forEach(button => {
        const nav = document.querySelector('nav');
        button.addEventListener('click', () => {
            hiddenElement(nav);
        })
    });
    
    // boton open menu header
    openNavButton.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        visibleElement(nav);
    });
    
    // ocultar nav
    function hiddenNav(){
        const nav = document.querySelector('nav');
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
});