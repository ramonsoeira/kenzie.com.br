$(".big-carousel").owlCarousel({
  autoplay: false,
  loop: true,
  dots: false,
  navText: [
    "<img src='images/left-arrow.svg' class='lefti'>",
    "<img src='images/right-arrow.svg' class='righti'>",
  ],
  nav: true,
  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 1,
    },
    768: {
      items: 2,
    },

    1024: {
      items: 2,
    },
    1300: {
      items: 3,
    },

    1365: {
      items: 3,
    },

    1920: {
      items: 3,
    },
  },
});
$(".sm-carousel").owlCarousel({
  items: 6,
  autoplay: false,
  loop: true,
  dots: false,
  navText: [
    "<img src = 'images/left-arrow.svg' class = 'lefti' > ",
    " <img src = 'images/right-arrow.svg' class = 'righti' > ",
  ],
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 3,
    },
    768: {
      items: 3,
    },
    991: {
      items: 4,
    },

    1200: {
      items: 5,
    },

    1365: {
      items: 6,
    },

    1920: {
      items: 6,
    },
  },
});
