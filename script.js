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
    loop: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    slideMargin: 25,
    autoWidth: true
  });

  $("ul.d-tabs li").click(function() {
    var tab_id = $(this).attr("data-tab");

    $("ul.d-tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});
