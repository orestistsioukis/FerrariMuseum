const openMenu = document.getElementById('openbutton');
const closeMenu = document.getElementById('closebutton');
const animMenu = document.getElementById('sidebarmenu');

openMenu.addEventListener('click', function() {
    animMenu.classList.add('show-menu');
});

closeMenu.addEventListener('click', function() {
    animMenu.classList.remove('show-menu');
});