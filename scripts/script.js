const currentYear = document.getElementById("current-year");

// update copyright date to current year
year = new Date().getFullYear();
currentYear.innerHTML = year;

// fade animation - add fade class to elements
$(window).on("load", function () {
  $(window)
    .scroll(function () {
      const windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        const objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});

// fly animation - add fly class to elements
var timer = 0;
function recheck() {
  var window_top = $(this).scrollTop();
  var window_height = $(this).height();
  var view_port_s = window_top;
  var view_port_e = window_top + window_height;

  if (timer) {
    clearTimeout(timer);
  }

  $(".fly").each(function () {
    var block = $(this);
    var block_top = block.offset().top;
    var block_height = block.height();

    if (block_top < view_port_e) {
      timer = setTimeout(function () {
        block.addClass("show-block");
      }, 100);
    } else {
      timer = setTimeout(function () {
        block.removeClass("show-block");
      }, 100);
    }
  });
}

$(function () {
  $(window).scroll(function () {
    recheck();
  });

  $(window).resize(function () {
    recheck();
  });

  recheck();
});

// smoove effects - add block to class and data-EFFECT attributes

// initialize
$(".block").smoove();

$(".block").smoove({
  offset: 150,
  opacity: 0,
  transition: "all 1s ease, opacity 1.5s ease",
  transformStyle: "preserve-3d",
  transformOrigin: false,
  perspective: 1000,
  min_width: 768,
  min_height: false,
});
