(function ($) {
  $.fn.slider = function (options) {

    // Настройки по умолчанию
    var settings = $.extend(
      {
        nextBtn: ".slider-next",
        prevBtn: ".slider-prev",
        dots: ".slider-nav",
        interval: "3000",
      },
      options
    );

    return this.each(function () {
      var slideIndex = 0;
      var slideCount = $("#slider-wrap").children().length;
      var translateWidth = 0;
      var dotIndex = 1;
      var switchInterval = setInterval(nextSlide, settings.interval);
      var width = -$(this).width();

      // Добавление элементов управления (Точки)
      (function () {
        for (var i = 0; i < slideCount; i++) {
          $(settings.dots).append('<li class="slider-dot"></li>');
        }
      })();

      // Смена активной точки
      function changeDot(a) {
        $(".slider-dot")
          .eq(a)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }

      // При наведении останавливать прокрутку
      $(this).hover(
        function () {
          clearInterval(switchInterval);
        },
        function () {
          switchInterval = setInterval(nextSlide, settings.interval);
        }
      );

      // Клик по кнопке назад
      $(settings.prevBtn).click(function () {
        prevSlide();
      });

      // Клик по кнопке вперед
      $(settings.nextBtn).click(function () {
        nextSlide();
      });

      // Клик по точке
      $(".slider-dot").click(function () {
        dotIndex = $(this).index();
        changeDot(dotIndex);
        if (dotIndex + 1 != slideIndex) {
          translateWidth = width * dotIndex;
          $("#slider-wrap").css({
            transform: "translate(" + translateWidth + "px, 0)",
          });
          slideIndex = dotIndex + 1;
        }
      });

      // На следующий слайд
      function nextSlide() {
        if (
          slideIndex == slideCount ||
          slideIndex <= 0 ||
          slideIndex > slideCount
        ) {
          $("#slider-wrap").css("transform", "translate(0, 0)");
          slideIndex = 1;
          changeDot(slideIndex - 1);
        } else {
          translateWidth = width * slideIndex;
          $("#slider-wrap").css({
            transform: "translate(" + translateWidth + "px, 0)",
          });
          changeDot(slideIndex);
          slideIndex++;
        }
      }

      // На предыдущий слайд
      function prevSlide() {
        if (slideIndex == 1 || slideIndex <= 0 || slideIndex > slideCount) {
          translateWidth = width * (slideCount - 1);
          $("#slider-wrap").css({
            transform: "translate(" + translateWidth + "px, 0)",
          });
          slideIndex = slideCount;
          changeDot(slideCount - 1);
        } else {
          translateWidth = width * (slideIndex - 2);
          $("#slider-wrap").css({
            transform: "translate(" + translateWidth + "px, 0)",
          });
          changeDot(slideIndex - 2);
          slideIndex--;
        }
      }
    });
  };
})(jQuery);
