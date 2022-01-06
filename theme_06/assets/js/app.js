$(document).ready(() => {
  // $("#auto-scroll").infiniteslide({
  //   speed: 20,
  //   direction: "up",
  // });

  $(".zoom-gallery").magnificPopup({
    delegate: "a",
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
