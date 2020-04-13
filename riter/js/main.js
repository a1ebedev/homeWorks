// Первый слайдер
var slideIndex = 1;
var slideInterval = setInterval(nextSlide,3000);

showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
    clearInterval(slideInterval);
}

function nextSlide () {
    showSlides(slideIndex);
    slideIndex += 1;
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider__checkbox");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("slider__checkbox-select", "");
    }
    slides[slideIndex - 1].style.opacity = 1;
    dots[slideIndex - 1].className += " slider__checkbox-select";
}