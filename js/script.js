

// ////////////////banner_part///////////////////

$('.banner_round_text').arctext({
    radius: 400,
    dir: 1,
    animation: 200,
});
$('.banner_slider').slick({
    dots: false,
    arrow:true,
    prevArrow:' <i class="fas fa-chevron-left prev"></i>',
    nextArrow:' <i class="fas fa-chevron-right next"></i>',
    infinite: true,
    speed: 800,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // ////////////////banner_part///////////////////










  // Set the date we're counting down to
var countDownDate = new Date("jun 24, 2021 ").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("minit").innerHTML = minutes
  document.getElementById("second").innerHTML = seconds
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// ////////////////////////////////////
$('.venobox').venobox(); 
// //////////////////////////////////



$('.team_slider').slick({
  dots: true,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 8,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 10
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 7
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ////////////////////
// $('.venobox').venobox(); 






// //////////////////
$('.gallery_slider').slick({
  dots: false,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"0",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// //////////////////
$('.testi_slider').slick({
  dots: false,
  infinite: true,
  arrows:true,
  prevArrow:'<i class="fas fa-chevron-left larow"></i>',
  nextArrow:'<i class="fas fa-chevron-right rarow"></i>',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,


  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});