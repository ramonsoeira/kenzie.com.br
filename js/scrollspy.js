var navWrap = $("#floating-navbar"),
  nav = $("nav"),
  startPosition = $("#startHere").offset().top,
  stopPosition = $("#stopHere").offset().top - nav.outerHeight();

$(document).scroll(function () {
  //stick nav to top of page
  var y = $(this).scrollTop();

  if (y > startPosition) {
    nav.addClass("sticky-spy");
    if (y > stopPosition) {
      nav.css("top", stopPosition - y);
    } else {
      nav.css("top", 0);
    }
  } else {
    nav.removeClass("sticky-spy");
  }
});

// $(window).on("scroll", function() {

//   var scrollSpy = $('#floating-navbar');
//   //obtem a posição da div com relação ao scroll
//   var posicao = scrollSpy.offset();

//   //define se o scroll atual é maior ou igual a posição da div
//   if($(window).scrollTop() >= posicao.top) {
//     $(".scroll-spy").css({"position" : "fixed"});
//   }else{
//      $(".scroll-spy").css({"position" : "absolute"});
//   }
// });
