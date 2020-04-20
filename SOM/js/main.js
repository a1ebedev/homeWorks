// Swiper слайдер

$(document).ready(function () {
  var recentSlider = new Swiper(".recent__list", {
    navigation: {
      nextEl: ".recent__next",
      prevEl: ".recent__prev",
    },
    direction: "horizontal",
    slidesPerView: 5,
    loop: false,
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
    },
  });
  var reviewsSlider = new Swiper(".reviews__list", {
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
    direction: "horizontal",
    slidesPerView: 4,
    loop: false,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
    },
  });
});

// Styler для выбора валюты

(function ($) {
  $(function () {
    $("select").styler();
  });
})(jQuery);

// Открытие меню профиля

$(document).mouseup(function (e) {
  var div = $(".user__popup");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.fadeOut();
  }
});
$(document).on("click", ".user", function () {
  $(".user__popup").fadeIn();
});

// Открытие мобильного меню
$(document).mouseup(function (e) {
  var div = $(".menu__list");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.fadeOut();
  }
});
$(document).on("click", ".menu", function () {
  $(".menu__list").fadeIn();
});
$(document).on("click", ".menu__close", function () {
  $(".menu__list").fadeOut();
});

//Свой плагин слайдера

$(".main-slider").slider({
  nextBtn: ".main-slider__next",
  prevBtn: ".main-slider__prev",
  dots: ".main-slider__nav",
  interval: "3000",
});
