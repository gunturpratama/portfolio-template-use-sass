// Select DOM items


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');


// Set initial state menu
let showMenu = false;


menuBtn.addEventListener('click', toogleMenu);


function toogleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // set menu state

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // set menu state
        showMenu = false;
    }

}

new Typed('.type', {
    strings: [
        "Creative Agency.",
        "Creative Space.",
        "Web Developer",
        "Mobile Developer",
        "Web Designers",
    ],
    typeSpeed: 70,
    startDelay: 1200,
    backSpeed: 20,
    backDelay: 500,
    loop: true,
});