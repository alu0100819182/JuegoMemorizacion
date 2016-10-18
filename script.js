$(document).ready(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.ba-slider').beforeAfter();
  $('.accordion').accordion({
    transitionSpeed: 400,
    transitionEasing: 'ease' 
  });
});


