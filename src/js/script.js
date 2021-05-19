$(document).ready(function () {
    // Sticky Navigation 
    $('.bio-waypoint').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky-nav')
        } else {
            $('nav').removeClass('sticky-nav')
        }
    }, {
        offset: '60px'
    })

    // Navigation scroll provided by CSS Tricks
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    // Animate CSS Waypoints
    // $('.js-hero-text-box').waypoint(function () {
    //     $('.js-hero-text-box').addClass('animated fadeInTopLeft')
    // }, {
    //     offset: '90%'
    // })

    $('.js-header-name').waypoint(function () {
        $('.js-header-name').addClass('animated bounceInUp')
    }, {
        offset: '96%'
    })

    $('.js-acclaimed-title').waypoint(function () {
        $('.js-acclaimed-title').addClass('animated fadeInUp')
    }, {
        offset: '91%'
    })

    $('.js-critics-title').waypoint(function () {
        $('.js-critics-title').addClass('animated bounceInUp')
    }, {
        offset: '90%'
    })
    $('.js-films').waypoint(function () {
        $('.js-films').addClass('animated fadeInUp')
    }, {
        offset: '85%'
    })

    $('.js-critics').waypoint(function () {
        $('.js-critics').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    })

    $('.js-influence-image-1').waypoint(function () {
        $('.js-influence-image-1').addClass('animated fadeInLeftBig')
    }, {
        offset: '90%'
    })
    $('.js-influence-image-2').waypoint(function () {
        $('.js-influence-image-2').addClass('animated fadeInRightBig')
    }, {
        offset: '90%'
    })

    // mobile navgiation menu
    $('.js-menu-icon').click(function () {
        const nav = $('.js-main-nav')
        // const icon = $('.js-menu-icon ion-icon')
        nav.slideToggle(200)
    })

})