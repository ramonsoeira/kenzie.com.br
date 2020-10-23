var navWrap = $("#floating-navbar"),
  nav = $("nav"),
  scrollSpy = $(".scroll-spy"),
  startPosition = navWrap.offset().top,
  stopPosition = $("#stopHere").offset().top - nav.outerHeight();

$(document).scroll(function () {
  //stick nav to top of page
  var y = $(this).scrollTop();

  if (y > startPosition) {
    nav.addClass("sticky-spy");
    scrollSpy.css({"position" : "fixed"});
    scrollSpy.css({"top" : "50px"});
    if (y > stopPosition) {
      nav.css("top", stopPosition - y);
    } else {
      nav.css("top", 0);
    }
  } else {
    nav.removeClass("sticky-spy");
    scrollSpy.css({"position" : "absolute"});
      scrollSpy.css({"top" : "20000px"});
  }
});