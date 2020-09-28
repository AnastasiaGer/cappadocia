$(function(){
  $('.about__slider, .trip__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../img/arrow-prew.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../img/arrow-next.svg" alt=""></button>',
    autoplay: true,
    fade: true,
  });

});
