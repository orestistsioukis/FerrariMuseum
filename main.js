const openMenu = document.getElementById('menuopenbutton');
const closeMenu = document.getElementById('menuclosebutton');
const animMenu = document.getElementById('sidebarmenu');

openMenu.addEventListener('click', function () {
    animMenu.style.display = 'block';
});

closeMenu.addEventListener('click', function () {
    animMenu.style.display = 'none';
});