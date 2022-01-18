$(document).ready(() => {
  $('body').css('overflowY', 'hidden');

  // const gs = new gsap();

  $("#btn-envelope").on('click', function () {

    gsap.to('.envelope-wrapper h3', {
      y: "-100%",
      opacity: 0,
      scale: .2,
      duration: .5,
    })
    gsap.to('.envelope h1', {
      scale: .2,
      opacity: 0,
      duration: .5
    }, "<=")
    gsap.to(this, {
      y: "-50%",
      scale: 1.2,
      opacity: 0,
      duration: .8,
    }, "<=")
    gsap.to('.envelope-wrapper', {
      y: "-100%",
      duration: .5,
      onComplete: function () {
        $('body').css('overflowY', 'auto');
      }
    }, ">")
  })

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