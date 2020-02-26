$(document).ready(() => {
  // project filtering
  let btns = $('.project-area .button-group button');

  btns.click(event => {
    btns.removeClass('active');
    event.target.classList.add('active');

    let selector = $(event.target).attr('data-filter');

    $('.project-area .grid').isotope({
      filter: selector
    });

    $('.project-area .grid .popup-link').magnificPopup({
      type: 'image'
    });
    return false;
  });

  // navbar shdowing effect
  // sticky navigation menu

  let nav_offset_top = $('.header-area').height() + 50;
  function navbarFixed() {
    if ($('.header-area').length) {
      $(window).scroll(() => {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header-area .main-menu').addClass('navbar-fixed');
        } else {
          $('.header-area .main-menu').removeClass('navbar-fixed');
        }
      });
    }
  }

  navbarFixed();

  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });


  // active link behavior for navbar
  $(".navbar-nav .nav-item").click((event) => {

    $(".navbar-nav .nav-item").removeClass('active');
    event.target.parentElement.classList.add('active');
  })


  // spalsh screen
  $.SplashScreen({
    id: 'splashscreen',
    desktop: true,
    mobile: true,
    forceLoader: false,
    queryParameter: 'loader',
    progressCount: false,
    progressCountId: 'status',
    progressBar: false,
    progressBarId: 'progress',
    fadeEffect: true,
    timeToFade: 1000, // in milliseconds (eg: 1000 = 1sec)
    timeOut: 2000   // in milliseconds (eg: 2000 = 2sec)
  });
});
