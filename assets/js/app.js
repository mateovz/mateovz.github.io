const nav = document.querySelector('nav');
const menuButtons = nav.querySelectorAll('a.hidden');
const openNavButton = document.querySelector('#show-nav');

window.addEventListener('load', () => {
    const hash = window.location.hash;
    if(hash !== '' && hash !== '#menu'){
        hiddenNav();
    }
})

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        hiddenNav();
    })
});

openNavButton.addEventListener('click', () => {
    hiddenNav();
});

function hiddenNav(){
    nav.classList.toggle('hidden');
}