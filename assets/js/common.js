//back to top

/* Back to Top Scroll S */
$(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
        $('#back-top').show();
    } else {
        $('#back-top').hide();
    }
});
$('#back-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 2500);
    return false;
});
/* Back to Top Scroll E */



//scroll header

$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('header').addClass('fixed animated fadeInDown slow');
    } else {
        $('header').removeClass('fixed animated fadeInDown slow');
    }
});

/* Bootstrap Select S */

$(window).on("load resize", function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        // using "ratio" endpoints
        breakpoints: {
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
    });
    var owl = $('.service_slider.owl-carousel');
    owl.owlCarousel({
        margin: 15,
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true,
        autoWidth: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            1024: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
    var owl1 = $('.testimonial_slider.owl-carousel');
    owl1.owlCarousel({
        margin: 15,
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true,
        autoWidth: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            1024: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    });

});



// isotop S
// $(window).on('load', function() {
//     setTimeout(function() {
//         $('.grid').isotope();
//     }, 1000);
// });
// $('.grid').isotope({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     masonry: {
//         columnWidth: '.grid-sizer'
//     }
// });
// isotop E



var swiper = new Swiper(".thm-swiper__slider", {
    "slidesPerView": 1,
    "loop": true,
    "effect": "fade",
    "pagination": {
        "el": "#main-slider-pagination",
        "type": "bullets",
        "clickable": true
    },
    "navigation": {
        "nextEl": "#main-slider__swiper-button-next",
        "prevEl": "#main-slider__swiper-button-prev"
    },
    "autoplay": {
        "delay": 5000

    }
});

$(document).ready(function() {
    new WOW().init();
});