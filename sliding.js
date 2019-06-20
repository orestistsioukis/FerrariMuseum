// const arrowLeft = document.querySelector('#arrow-left');
// const arrowRight = document.querySelector('#arrow-right');
let slider = document.querySelectorAll('.slide');
let current = 0;

// Clear all div
function reset() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
}
// Start slider
function startSlide() {
    reset();
    slider[0].style.display = 'flex';
}

// Show previous image
function slideLeft() {
    reset();
    slider[current - 1].style.display = 'flex';
    current--;
}
// Show next image
function slideRight() {
    reset();
    slider[current + 1].style.display = 'flex';
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function() {
    if (current === 0) {
        current = slider.length;
    }
    slideLeft();
});
// Right arrow click
arrowRight.addEventListener('click', function() {
    if (current === slider.length - 1) {
        current = -1;
    }
    slideRight();
});
startSlide();