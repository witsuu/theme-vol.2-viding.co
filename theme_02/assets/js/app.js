"use strict";

$(document).ready(() => {
  const width = window.screen.width;
  let item;
  if (width >= 576) {
    item = 3;
  } else {
    item = 2;
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

  // $("#auto-scroll").infiniteslide({
  //   speed: 20,
  //   direction: "up",
  // });
});
