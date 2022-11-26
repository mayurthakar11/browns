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
        margin: 30,
        loop: false,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true,
        autoWidth: false,
        mouseDrag: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            568: {
                items: 1,
                dots: true,
            },
            767: {
                items: 2,
                dots: true,
            },
            991: {
                items: 2,
                dots: true,
            },
            1200: {
                margin: 10,
                items: 3,
            }
        }
    });
    var owl1 = $('.testimonial_slider.owl-carousel');
    owl1.owlCarousel({
        margin: 15,
        loop: false,
        nav: false,
        dots: true,
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
                autoWidth: false,
            },
            480: {
                items: 1,
                autoWidth: false,
            },
            1024: {
                items: 2,
                autoWidth: false,
            },
            1200: {
                items: 2,
            }
        }
    });
    var owl2 = $('.project-list-slider.owl-carousel');
    owl2.owlCarousel({
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        mouseDrag: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
            },
            480: {
                items: 1,
                autoWidth: false,
            },
            1024: {
                items: 1,
                autoWidth: false,
            },
            1200: {
                items: 1,
            }
        }
    });

});



// isotop S
$(window).on('load', function() {
    setTimeout(function() {
        $('.grid').isotope();
    }, 1000);
});
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});
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
        "delay": 5000000000

    }
});

$(document).ready(function() {
    new WOW({
        mobile: false,
    }).init();
});