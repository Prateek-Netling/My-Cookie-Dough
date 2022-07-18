$(document).ready(function() {

  
  $("#header .menu-btn").click(function(){
    $('body').toggleClass("open-menu");
    $('html').toggleClass("open-menu");
    return false;
  });

  $(".timings-chart .toggle-btn").click(function(){
    $(this).parent(".timings-chart").toggleClass("open");
    return false;
  });

   $('.carousel1').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    margin:16,
    nav: false,
    dots: false,
    responsive:{
      0: {
        items:2
      },768:{
          items:4,
      },992:{
        margin:24,
        items:6,
      }
    }
  });

  if (/Edge\/\d./i.test(navigator.userAgent)){
    jQuery('html').addClass('ie');
  };


});
var s = skrollr.init();
$(window).load(function() {
  objectFitImages();
});
