$(document).ready(function(){

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if ( st > 0 ) {
            $('.header').css('background-color','#aa7d1e');
        } else {
            $('.header').css('background-color','transparent');
        }
    });

    $('.mobile-btn').click(function(){
        if ( $(this).hasClass("active") ) {
            $('.mobile-menu').animate({height: 0},300);
            setTimeout(function(){
                $('.mobile-menu').removeClass("active");
                $('.header').removeClass("active");
                $('.mobile-btn').removeClass("active");
                $('.mobile-background').removeClass("active");
            }, 300);
        } else {
            $(this).addClass("active");
            $('.mobile-background').addClass("active");
            $('.header').addClass("active");
            $('.mobile-menu').addClass("active");
            $('.mobile-menu').animate({height: 298},300);
        }
    });

    $('.mobile-background').click(function(){
        $('.mobile-menu').animate({height: 0},300);
        setTimeout(function(){
            $('.mobile-menu').removeClass("active");
            $('.header').removeClass("active");
            $('.mobile-btn').removeClass("active");
            $('.mobile-background').removeClass("active");
        }, 300);
    });

    $('.gallery-list li').click(function(){
        if ( $(this).hasClass("active") ) {
            $('.gallery-list li').removeClass("active");
        } else {
            $('.gallery-list li').removeClass("active");
            $(this).addClass("active");
        }
    });

    $('.fancybox').fancybox();

    $('.service-slider').slick({
        infinite: true,
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
                }
            }
        ]
    });

});