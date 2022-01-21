"use strict";

$(document).ready(() => {

  $('body').css('overflowY', 'hidden');

  $("#btn-envelope").on('click', function () {
    $(".envelope-wrapper").css('transform', 'translateY(-100%)')
    $(".envelope-wrapper").css('opacity', 0)

    $('body').css('overflowY', 'auto');
  })

  const width = window.screen.width;
  let item;
  if (width >= 576) {
    item = 3;
  } else {
    item = 1;
  }

  const owl = $(".owl-carousel");
  owl.owlCarousel({
    items: item,
    loop: true,
    dots: false,
  });

  $(".next").on("click", () => {
    owl.trigger("next.owl.carousel");
  });
  $(".prev").on("click", () => {
    owl.trigger("prev.owl.carousel");
  });

  $("#gallery").magnificPopup({
    delegate: "div a",
    type: "image",
    mainClass: "mfp-with-zoom mfp-img-mobile",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      easing: "ease-in-out",
    },
  });
});