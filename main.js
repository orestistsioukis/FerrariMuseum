const load = document.getElementById('loading');
const openMenu = document.getElementById('openbutton');
const closeMenu = document.getElementById('closebutton');
const animMenu = document.getElementById('sidebarmenu');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

setTimeout(function() {
    load.style.display = 'none';
}, 4000);

openMenu.addEventListener('click', function() {
    animMenu.classList.add('show-menu');
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'none';
});

closeMenu.addEventListener('click', function() {
    animMenu.classList.remove('show-menu');
    arrowLeft.style.display = 'block';
    arrowRight.style.display = 'block';
});