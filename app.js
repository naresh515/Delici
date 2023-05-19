$(window).on('load', function () {
    setTimeout(function () {
        $('.page-loader').fadeOut('slow');
    }, 350);

    $('.slice-slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        variableWidth: false,
        pauseOnHover: false,
        infinite: true,
        cssEase: 'linear'
    })
    $('.gallery-images').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        variableWidth: false,
        pauseOnHover: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 824,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    })
    $('.testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        variableWidth: false,
        pauseOnHover: false,
        infinite: true,
        cssEase: 'linear'
    })
    $('.clients-image ').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        centerPadding: '0px',
        centerMode: true,
        variableWidth: true,
        infinite: true,
    })
    const $tabContents = $('.tab');
    const $tab = $('.tab-buttons .tab-btn');

    $tab.click(function () {
        const tab_id = $(this).attr('data-tab');

        $tab.removeClass('active-btn');
        $tabContents.removeClass('active-tab');
        $(this).addClass('active-btn');
        $("#" + tab_id).addClass('active-tab');
    })

    $(".toggle").click(function () {
        $('.right-siderbar').addClass('side-content-visible');
        $("body").addClass("model-open");
        $('.overlay-inner-box').addClass("menu-backdrop");
    })
    $(".cross-icon").click(function () {
        $('.right-siderbar').removeClass('side-content-visible');
        $("body").removeClass("model-open");
        $('.overlay-inner-box').removeClass("menu-backdrop");
    })


    var isScrolled = false;
    const sticky = $('.nav-bar');
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll >= 1) {
            sticky.addClass('fixed');
        }
        else {
            sticky.removeClass('fixed');
        }
        if (scroll >= 9000 && isScrolled == false) {
            isScrolled = true
            $('.counter-header').each(function () {
                var countValue = parseInt($(this).text());
                $(this).prop('Counter', 0).animate({
                    Counter: countValue
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
    var scrollTop = $(".scroll-top");

    $(window).scroll(function () {

        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;

    });
});
