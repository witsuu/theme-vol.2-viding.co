AOS.init({
  easing: "ease-out-back",
  duration: 1000,
});

$(document).ready(() => {
  $("#auto-scroll").infiniteslide({
    speed: 20,
    direction: "up",
  });
});
