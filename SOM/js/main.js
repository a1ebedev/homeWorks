$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    direction: 'horizontal',
    slidesPerView: 5,
    loop: false
  })
});