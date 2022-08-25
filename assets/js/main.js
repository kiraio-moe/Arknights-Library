$(() => {
    /*** Sticky section ***/
    // height = visible window
    let viewportHeight = window.innerHeight;
    let sectionContentHeight = viewportHeight / 1.3;

    $(".vh").css({
        height: viewportHeight,
    });

    $(".sch").css({
        "max-height": sectionContentHeight,
        height: sectionContentHeight,
    });

    const galleryImg = $(".gallery .gallery-content .card");
    galleryImg.mouseenter(function () {
        galleryImg.css({
            "-webkit-filter": "brightness(0.5)",
            filter: "brightness(0.5)",
            transition: "ease-in-out all 0.5s",
        });
        $(this).css({
            "-webkit-filter": "brightness(1)",
            filter: "brightness(1)",
            transition: "ease-in-out all 0.5s",
        });
    });
    galleryImg.mouseleave(function () {
        $(this && galleryImg).css({
            "-webkit-filter": "brightness(1)",
            filter: "brightness(1)",
            transition: "ease-in-out all 0.5s",
        });
    });

    $.scrollify({
        section: ".sticky-section",
        easing: "easeOutExpo",
        interstitialSection: ".footer",
        scrollSpeed: 150,
        offset: 0,
        scrollbars: false,
        standardScrollElements: ".normal-scroll",
        setHeights: true,
        overflowScroll: false,
        updateHash: false,
        touchScroll: true,
        before: function () {},
        after: function () {
            UpdateNavbarLinkState(navbarLink);
        },
        afterResize: function () {},
        afterRender: function () {
            UpdateNavbarLinkState(navbarLink);
        },
    });

    const navbarLink = $(
        "#offcanvasTop > div > div.offcanvas-body > nav > a.nav-link"
    );

    $("#offcanvasTop > div > div.offcanvas-body > nav > a").click(function () {
        $.scrollify.move("#" + $(this).attr("data-scrollify-move"));
    });

    /*** Hamburger menu ***/
    const hamburger = $(".navbar-toggle > .hamburger");
    hamburger.click(function () {
        hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
    });
});

function UpdateNavbarLinkState(obj) {
    let current = $.scrollify.current();
    obj.removeClass("active");

    for (let i = 0; i < obj.length; i++) {
        let el = obj.eq(i);
        if (
            $(el).attr("data-scrollify-move") ==
            current.attr("data-section-name")
        ) {
            el.addClass("active");
        }
    }
}

// VanillaTilt.init(document.querySelector(".header"), {
//     max: 2,
//     speed: 400,
// });
// , {
//     reverse: false, // reverse the tilt direction
//     max: 2, // max tilt rotation (degrees)
//     startX: 0, // the starting tilt on the X axis, in degrees.
//     startY: 0, // the starting tilt on the Y axis, in degrees.
//     perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
//     scale: 1, // 2 = 200%, 1.5 = 150%, etc..
//     speed: 300, // Speed of the enter/exit transition
//     transition: true, // Set a transition on enter/exit.
//     axis: null, // What axis should be disabled. Can be X or Y.
//     reset: true, // If the tilt effect has to be reset on exit.
//     easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
//     glare: false, // if it should have a "glare" effect
//     "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
//     "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
//     // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
//     "mouse-event-element": null, // css-selector or link to an HTML-element that will be listening to mouse events
//     "full-page-listening": true, // If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
//     gyroscope: true, // Boolean to enable/disable device orientation detection,
//     gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
//     gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
//     gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
//     gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
//     gyroscopeSamples: 10, // How many gyroscope moves to decide the starting position.
// });
