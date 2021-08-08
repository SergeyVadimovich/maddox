$(function(){
  // burger menu
  $('.menu-btn').on('click', function(){
    $('.menu-desc').toggleClass('menu-desc--active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
    $('.menu-btn').toggleClass('menu-btn--active');
  });
  // end burger menu

  // slider
  $('.promo__slider-items').slick({
    arrows: false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // end slider

  // header bg
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('.header').addClass('header__bg');
    } else {
      $('.header').removeClass('header__bg');
    }
  });

  // end header bg
});