var sliderImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('.left');
var arrowRight = document.querySelector('.right');
var current = 0;

// Clear all images
function reset() {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

// Init slider
function startSlide() {
    reset()
    sliderImages[0].style.display = 'block';
}

//Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//SHow next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// Left btn click
arrowLeft.addEventListener('click', function() {
    if (current === 0) {
        current = 1;
    }
    slideLeft();
});

// Right btn click
arrowRight.addEventListener('click', function() {
    if (current === sliderImages.length -1) {
        current = 1;
    }
    slideRight();
});

startSlide();
