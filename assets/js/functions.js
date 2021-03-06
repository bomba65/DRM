$( document ).ready(function() {
    var nav = $('nav');
    var navItems = $('.navbar .main-nav li');

    var navbarCheck = function() {
        nav.toggleClass('navbar-filled', window.scrollY > 0);
    }

    navbarCheck();

    $('.navbar .main-nav li a').bind('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var elementOffset = document.querySelector(id).offsetTop;
        $('html, body').animate({
            scrollTop: elementOffset - 100
        }, '1000');
        console.log(elementOffset);
    });

    $(document).scroll(function() {
        navbarCheck();
    });

    var checkWaypoint = function( waypoint ) {
        var hash = $(waypoint.element).attr('id');
        var noOne = true;
        $.each(navItems, function(i) {
            var b = $(this).children('a').attr('href').slice(1) === hash;
            $(this).toggleClass('active', b);
            if (b && i!==0) {
                noOne = false;
            }
        });
        $(navItems[0]).toggleClass('active', noOne);
    };

    var sections = $('section');

    sections.waypoint(function(direction) {
        if (direction === 'up') {
            checkWaypoint(this);
        }
    }, { offset: 90 });

    sections.waypoint(function(direction) {
        if (direction === 'down') {
            checkWaypoint(this);
        }
    }, { offset: 110 });
});
