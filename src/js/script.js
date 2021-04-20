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


})