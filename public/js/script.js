$(function(){
  $('.about__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="about__slider__btn about__slider__btnprev"><img src="../img/arrow-prew.svg" alt=""></button>',
    nextArrow: '<button class="about__slider__btn about__slider__btnnext"><img src="../img/arrow-next.svg" alt=""></button>',
    autoplay: true,
    fade: true,
  });

  $('.trip__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="trip__slider__btn trip__slider__btnprev"><img src="../img/arrow-prew.svg" alt=""></button>',
    nextArrow: '<button class="trip__slider__btn trip__slider__btnnext"><img src="../img/arrow-next.svg" alt=""></button>',
    autoplay: true,
    fade: true,
  });

});
