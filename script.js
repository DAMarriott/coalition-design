$(document).ready(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    } //if-else
  }); //win func.

  $("#lightSlider").lightSlider({
    item: 4,
    loop: false,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1
        }
      }
    ]
  });
});
