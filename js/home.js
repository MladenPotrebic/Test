$(document).ready(function () {

    // Owl Carousel

    // Products
    $("#owl--PD").owlCarousel({
        stagePadding: 0,
        items: 1,
        loop: true,
        margin: 0,
        singleItem: true,
        dots: false,
        touchDrag: false,
        mouseDrag: false
    });

    $("#owl--PI").owlCarousel({
        stagePadding: 0,
        items: 1,
        loop: true,
        margin: 0,
        singleItem: true,
        dots: false,
        touchDrag: false,
        mouseDrag: false
    });

    var owlPD = $('#owl--PD');
    var owlPI = $('#owl--PI');

    $('#btn--owl--next--PD').click(function () {
        owlPD.trigger('next.owl.carousel');
        owlPI.trigger('next.owl.carousel');
    })

    $('#btn--owl--prev--PD').click(function () {
        owlPD.trigger('prev.owl.carousel');
        owlPI.trigger('prev.owl.carousel');
    })

    // Improve Your Business
    $("#owl--IYB").owlCarousel({
        stagePadding: 0,
        items: 1,
        loop: true,
        margin: 0,
        singleItem: true,
        dots: false,
    });

    var owlIYB = $('#owl--IYB');

    $('#btn--owl--next--IYB').click(function () {
        owlIYB.trigger('next.owl.carousel');
    })


    $('#btn--owl--prev--IYB').click(function () {
        owlIYB.trigger('prev.owl.carousel');
    })

    $("#owl--C").owlCarousel({
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            500: {
                items: 3,
            }
        },
        stagePadding: 0,
        loop: true,
        margin: 40,
        dots: false,

    });

    // Introduction
    $("#owl--I").owlCarousel({
        stagePadding: 0,
        items: 1,
        loop: false,
        margin: 0,
        singleItem: true,
        dots: true,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,

    });

    $('.about-owl').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 20,
                dots: true,
                dotsEach: true,
                loop: true,
            },
            550: {
                items: 2,
                margin: 20,
                dots: true,
                dotsEach: true,
                loop: true,
            }
        }
    })

    $('.owl--inovation-mob').owlCarousel({
        items: 1,
        margin: 20,
        dots: true,
        dotsEach: true,
        loop: true,
    })

    // if(window.innerWidth < 550) {
    //     $('.about-owl').owlCarousel({
    //         items: 1,
    //         margin: 20,
    //         dots: true,
    //         dotsEach: true,
    //         loop:true,
    //     })
    // }

    //SCENE 1

    var controller = new ScrollMagic.Controller();
    var cc1 = new TimelineMax();

    cc1
    .to($('.mobile-main-message'), 0.1, {visibility: 'visible', transform: 'translateX(0)'}, 0.1)
    .to($('#message-1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('#message-2'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('#message-3'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('#message-4'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('#message-5'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('.top-left'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 1)
    .to($('.top-right'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 2)
    .to($('.bottom-left'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 3)
    .to($('.bottom-right'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 4)
    .to($('#cc1'), 0, {opacity: 0, transform: 'translateX(-100%)'}, 5)
    .to($('#ci2'), 0, {opacity: 1, transform: 'translateX(0)'}, 5)
    .to($('#icv-image'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 5)
    .to($('.top-right-icv'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 5)
    .to($('.middle-right-icv'), 0.1, {visibility: 'visible', transform: 'translateX(0)'}, 6)
    .to($('.bottom-icv'), 0, {visibility: 'visible',  transform: 'translateX(0)'}, 7)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#scrollable-card",
        triggerHook: 0.05,
        duration: '850px',
    })
        .setPin('#scrollable-card')
        .setTween(cc1)
        .addTo(controller);

    //SCENE 1

    //SCENE 2

    var controller2 = new ScrollMagic.Controller();
    var cc2 = new TimelineMax();

    cc2
        .to($('#focus-image'), 0.1, { visibility: 'hidden' }, 1)
        .to($('#focus-workflow'), 0, { visibility: 'visible', transform: 'translateX(0)' }, 2)
        .to($('#focus-calendar'), 0, { visibility: 'visible', transform: 'translateX(0)' }, 3)
        .to($('#focus-files'), 0, { visibility: 'visible', transform: 'translateX(0)' }, 4)
        .to($('#focus-agenda'), 0, { visibility: 'visible', transform: 'translateX(0)' }, 5)

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#scrollable-card-2",
        triggerHook: 0.05,
        duration: '100%',
    })
        .setPin('#scrollable-card-2')
        .setTween(cc2)
        .addTo(controller2);

    //SCENE 2

    //SCENE 1-m

    // var controllerM = new ScrollMagic.Controller();
    // var cc1M = new TimelineMax();

    // cc1M
    //     .to($('#ci1-m'), 0.1, { opacity: 1, transform: 'translateX(0)' }, 0.1)
    //     .to($('.card-mobile-m'), 0.1, { opacity: 1, transform: 'translateX(0)' }, 0.1)
    //     .to($('.mobile-main-message-m'), 0.1, { visibility: 'visible', transform: 'translateX(0)' }, 1)
    //     .to($('#message-1-m'), 0.1, { opacity: 1, transform: 'translateX(0)' }, 2)
    //     .to($('#message-2-m'), 0.1, { opacity: 1, transform: 'translateX(0)' }, 2)
    //     .to($('#message-3-m'), 0.1, { opacity: 1, transform: 'translateX(0)' }, 2)
    //     .to($('#message-4-m'), 0.1, { opacity: 1, transform: 'translateX(0)' }, 2)
    //     .to($('#message-5-m'), 0.1, { opacity: 1, transform: 'translateX(0)' }, 2)
    //     .to($('#message-1-m'), 0.1, { opacity: 0, transform: 'translateX(30%)' }, 3)
    //     .to($('#message-2-m'), 0.1, { opacity: 0, transform: 'translateX(30%)' }, 3)
    //     .to($('#message-3-m'), 0.1, { opacity: 0, transform: 'translateX(30%)' }, 3)
    //     .to($('#message-4-m'), 0.1, { opacity: 0, transform: 'translateX(30%)' }, 3)
    //     .to($('#message-5-m'), 0.1, { opacity: 0, transform: 'translateX(30%)' }, 3)
    //     .to($('.top-right-m'), 0.1, { visibility: 'visible', top: '40%', left: '18%' }, 3.1)
    //     .to($('.top-left-m'), 0.1, { visibility: 'visible', top: '65%', left: '16%' }, 4)
    //     .to($('.top-right-m'), 0.1, { visibility: 'hidden', top: '30%', left: '0%' }, 5)
    //     .to($('.top-left-m'), 0.1, { visibility: 'hidden', top: '55%', left: '0%' }, 5)
    //     .to($('.bottom-left-m'), 0.1, { visibility: 'visible', top: '33%', left: '16%' }, 5)
    //     .to($('.bottom-right-m'), 0.1, { visibility: 'visible', bottom: '0%', right: '16%' }, 6)
    //     .to($('.bottom-left-m'), 0.1, { visibility: 'hidden', top: '33%', left: '0%' }, 7)
    //     .to($('.bottom-right-m'), 0.1, { visibility: 'hidden', bottom: '0%', right: '0%' }, 7)
    //     .to($('#cc1-m'), 0.1, { opacity: 0, transform: 'translateX(100%)' }, 7.1)
    //     .to($('#ci2-m'), 0, { opacity: 1, transform: 'translateX(0)' }, 7.1)
    //     .to($('#icv-image-m'), 0, { visibility: 'visible', transform: 'translateX(0)' }, 7.1)
    //     .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '11%' }, 8)
    //     .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '15%' }, 9)
    //     .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%' }, 10)

    // if (window.innerWidth < 670) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '7%' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '12%', top: '118%' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-78%' }, 10)
    // }

    // if (window.innerWidth < 640) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '6%' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '11%', top: '119%' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-83%' }, 10)
    // }

    // if (window.innerWidth < 600) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '0%' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '11%', top: '123%' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-94%', left: '-17%' }, 10)
    // }

    // if (window.innerWidth < 570) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '-10%' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '11%', top: '126%' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-102%', left: '-17%' }, 10)
    // }

    // if (window.innerWidth < 530) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '-11%' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '1%', top: '129%' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-112%', left: '-28%' }, 10)
    // }

    // if (window.innerWidth < 500) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '-3%', top: '90%' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '4%', top: '110%' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-48%', left: '-12%' }, 10)
    // }

    // if (window.innerWidth < 480) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '-3%', top: '90%', transform: 'scale(0.6)' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '3%', top: '114%', transform: 'scale(0.6)' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-58%', left: '-29%', transform: 'scale(0.4)' }, 10)
    // }

    // if (window.innerWidth < 430) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '-10%', top: '90%', transform: 'scale(0.6)' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '-3%', top: '114%', transform: 'scale(0.6)' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-58%', left: '-27%', transform: 'scale(0.4)' }, 10)
    // }

    // if (window.innerWidth < 430) {
    //     cc1M
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-58%', left: '-33%', transform: 'scale(0.4)' }, 10)
    // }

    // if (window.innerWidth < 380) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '-18%', top: '90%', transform: 'scale(0.6)' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '-6%', top: '114%', transform: 'scale(0.6)' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-58%', left: '-44%', transform: 'scale(0.4)' }, 10)
    // }

    // if (window.innerWidth < 350) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '-31.5%', top: '90%', transform: 'scale(0.6)' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '-17%', top: '114%', transform: 'scale(0.6)' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-58%', left: '-54%', transform: 'scale(0.4)' }, 10)
    // }

    // if (window.innerWidth < 330) {
    //     cc1M
    //         .to($('.top-right-icv-m'), 0, { visibility: 'visible', right: '-28.5%', top: '90%', transform: 'scale(0.6)' }, 8)
    //         .to($('.middle-right-icv-m'), 0.1, { visibility: 'visible', right: '-17%', top: '114%', transform: 'scale(0.6)' }, 9)
    //         .to($('.bottom-icv-m'), 0.1, { visibility: 'visible', left: '0%', bottom: '-58%', left: '-61%', transform: 'scale(0.4)' }, 10)
    // }


    // var sceneM = new ScrollMagic.Scene({
    //     triggerElement: "#scrollable-card-m",
    //     triggerHook: 0.05,
    //     duration: '100%',
    // })
    //     .setPin('#scrollable-card-m')
    //     .setTween(cc1M)
    //     .addTo(controllerM);

    //SCENE 1-m

});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function moveToHomePage() {
    location.replace("index.html");
}


