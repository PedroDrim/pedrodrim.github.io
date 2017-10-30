var carouselAutoplay = function() {
        $('.carousel').carousel('next');
        setTimeout(carouselAutoplay, 6000);
    }

$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    
    carouselAutoplay();
});