var $ = require('jquery');
var _ = require('underscore');


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });


  var topOfSection = $("#topOfSection").offset().top;
  $(window).scroll(function() {
      if($(window).scrollTop() >= topOfSection) { //scrolled past the other div?
        $(".hidden-top-button").removeClass('fadeOut');
          $(".hidden-top-button").removeClass('hidden'); //reached the desired point -- show div
      }else if($(window).scrollTop() < topOfSection){
        $(".hidden-top-button").addClass('fadeOut');

      }
  });


});
