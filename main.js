const load = document.getElementById('loading');
const openMenu = document.getElementById('openbutton');
const closeMenu = document.getElementById('closebutton');
const animMenu = document.getElementById('sidebarmenu');

setTimeout(function() {
    load.style.display = 'none';
}, 4000);

openMenu.addEventListener('click', function() {
    animMenu.classList.add('show-menu');
});

closeMenu.addEventListener('click', function() {
    animMenu.classList.remove('show-menu');
});