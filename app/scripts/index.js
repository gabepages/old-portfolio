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
        }, 700);
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






  $('.image').hover(
    function(e){
      $(this).css('opacity','0.2');
      var element = $(this).parent().children('p');
      element.removeClass('fadeOut');
      element.css('display', 'inline-block');
    },
    function(e){
      $(this).css('opacity','1');
      var element = $(this).parent().children('p');
      element.addClass('fadeOut');
  });


  $('.image').siblings('p').hover(
    function(e){
      $(this).removeClass('fadeOut');
      $(this).css('display', 'inline-block');
      var element = $(this).siblings('.image');
      element.css('opacity','0.2');
    },
    function(e){
      if($(this).siblings('.image').is(':hover')){
        console.log('working');
      }else{
        $(this).siblings('.image').css('opacity','1');
        $(this).addClass('fadeOut');
      }
  });





  $('.portfolio-piece').hover(
    function(){
      $(this).css('opacity','0.2');
      var element = $(this).siblings('.extentions');
      element.removeClass('fadeOut');
      element.css('display', 'block');
    },
    function(){
      $(this).css('opacity','1');
      var element = $(this).siblings('.extentions');
        element.addClass('fadeOut');
    }
  );


  $('.extentions').hover(
    function(){
      $(this).removeClass('fadeOut');
      $(this).css('display', 'block');
      var element = $(this).siblings('.portfolio-piece');
      element.css('opacity', '0.2');
    },
    function(){
      if($(this).siblings('.portfolio-piece').is(':hover')){
        console.log('working');
      }else{
        $(this).siblings('.portfolio-piece').css('opacity','1');
        $(this).addClass('fadeOut');
      }
  });

});
