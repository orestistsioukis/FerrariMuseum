const openMenu = document.querySelector('.menuopenbutton');
const closeMenu = document.querySelector('.menuclosebutton');
const animMenu = document.querySelector('#sidebarmenu');

openMenu.addEventListener('click', function () {
    animMenu.classList.add('showmenu');
});

closeMenu.addEventListener('click', function () {
    animMenu.classList.remove('showmenu');
});