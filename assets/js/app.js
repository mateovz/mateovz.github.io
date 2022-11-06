const menuButtons = document.querySelectorAll('nav a.hidden');
const openNavButton = document.querySelector('#show-nav');

window.addEventListener('load', () => {
    hiddenNav(screen.width);
});

window.addEventListener('resize', () => {
    hiddenNav(screen.width);
});

menuButtons.forEach(button => {
    const nav = document.querySelector('nav');
    button.addEventListener('click', () => {
        hiddenElement(nav);
    })
});

openNavButton.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    visibleElement(nav);
});

function hiddenNav(screen = null){
    const nav = document.querySelector('nav');
    const hash = window.location.hash;

    if(
        (hash !== '' && hash !== '#menu')
        && screen < 760
    ){
        hiddenElement(nav);
    }else{
        visibleElement(nav);
    }
    
}

function hiddenElement(element){
    element.classList.add('hidden');
}

function visibleElement(element){
    element.classList.remove('hidden');
}