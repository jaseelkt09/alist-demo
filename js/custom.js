
$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

// brand_sec owlCarousel
$('.brand_sec .owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
});

// brand_loves owlCarousel
$('.brand_loves .owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

// creator
$('.creator_sec .owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

// counter
$('.counter').each(function() {
  var $this = $(this),
  countTo = $this.attr('data-count');
  $({
    countNum: $this.text()
  }).animate({
    countNum: countTo
  }, {
    duration: 3000,
    easing: 'linear',
    step: function() {
      $this.text(Math.floor(this.countNum) + "k+");
    },
    complete: function() {
      $this.text(this.countNum + "k+");
    }
  });
});


// header scroll
$(window).scroll(function() {
  var nav = $('#navbar');
  var top = 100;
  if ($(window).scrollTop() >= top) {
    nav.addClass('navbar-white-bg');
  } else {
    nav.removeClass('navbar-white-bg');
  }
});
