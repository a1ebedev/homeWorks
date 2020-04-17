$(document).ready(function () {
  var recentSlider = new Swiper ('.recent__list', {
    navigation: {
      nextEl: '.recent__next',
      prevEl: '.recent__prev',
    },
    direction: 'horizontal',
    slidesPerView: 5,
    loop: false
  })
  var reviewsSlider = new Swiper ('.reviews__list', {
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },
    direction: 'horizontal',
    slidesPerView: 4,
    loop: false
  })
});