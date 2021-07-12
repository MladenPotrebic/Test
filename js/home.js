$(document).ready(function(){

    // Owl Carousel

    // Products
    $("#owl--PD").owlCarousel({
        stagePadding: 0,
        items: 1,
        loop:true,
        margin:0,
        singleItem:true,
        dots: false,
        touchDrag  : false,
        mouseDrag  : false
    });

    $("#owl--PI").owlCarousel({
        stagePadding: 0,
        items: 1,
        loop:true,
        margin:0,
        singleItem:true,
        dots: false,
        touchDrag  : false,
        mouseDrag  : false
    });

    var owlPD = $('#owl--PD');
    var owlPI = $('#owl--PI');

    $('#btn--owl--next--PD').click(function() {
        owlPD.trigger('next.owl.carousel');
        owlPI.trigger('next.owl.carousel');
    })

    $('#btn--owl--prev--PD').click(function() {
        owlPD.trigger('prev.owl.carousel');
        owlPI.trigger('prev.owl.carousel');
    })

    // Improve Your Business
    $("#owl--IYB").owlCarousel({
        stagePadding: 0,
        items: 1,
        loop:true,
        margin:0,
        singleItem:true,
        dots: false,
    });

    var owlIYB= $('#owl--IYB');

    $('#btn--owl--next--IYB').click(function() {
        owlIYB.trigger('next.owl.carousel');
    })
    

    $('#btn--owl--prev--IYB').click(function() {
        owlIYB.trigger('prev.owl.carousel');
    })

    $("#owl--C").owlCarousel({
        responsive:{
            0:{
                items:2,
                nav:true
            },
            500:{
                items:3,
            }
        },
        stagePadding: 0,
        loop:true,
        margin:40,
        dots: false,
        
    });

    // Introduction
    $("#owl--I").owlCarousel({
        stagePadding: 0,
        items: 1,
        loop:false,
        margin:0,
        singleItem:true,
        dots: true,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        
    });

    $('.about-owl').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 20,
                dots: true,
                dotsEach: true,
                loop:true,
            },
            550: {
                items: 2,
                margin: 20,
                dots: true,
                dotsEach: true,
                loop:true,
            }
        }
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
    .to($('#ci1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('.card-mobile'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('.mobile-main-message'), 0.1, {visibility: 'visible', transform: 'translateX(0)'}, 0.1)
    .to($('#message-1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('#message-2'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('#message-3'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('#message-4'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('#message-5'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
    .to($('.top-left'), 0.1, {visibility: 'visible', left: '-11rem'}, 0.9)
    .to($('.top-right'), 0.1, {visibility: 'visible', right: '-9rem'}, 1.9)
    .to($('.bottom-left'), 0.1, {visibility: 'visible', left: '-19rem'}, 3)
    .to($('.bottom-right'), 0.1, {visibility: 'visible', right: '-13rem'}, 4)
    .to($('#cc1'), 0.1, {opacity: 0, transform: 'translateX(-100%)'}, 5)
    .to($('#ci2'), 0, {opacity: 1, transform: 'translateX(0)'}, 5)
    .to($('#icv-image'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 5)
    .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-70px'}, 5)
    .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-60px'}, 6)
    .to($('.bottom-icv'), 0.1, {visibility: 'visible', left: '60px'}, 7)

    // responsive

    if(window.innerWidth < 1900) {
        cc1
        .to($('#ci1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.card-mobile'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.mobile-main-message'), 0.1, {visibility: 'visible', transform: 'translateX(0)'}, 0.1)
        .to($('#message-1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-2'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-3'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-4'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-5'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.top-left'), 0.1, {visibility: 'visible', left: '-11rem'}, 0.9)
        .to($('.top-right'), 0.1, {visibility: 'visible', right: '-9rem'}, 1.9)
        .to($('.bottom-left'), 0.1, {visibility: 'visible', left: '-17rem'}, 3)
        .to($('.bottom-right'), 0.1, {visibility: 'visible', right: '-12rem'}, 4)
        .to($('#cc1'), 0.1, {opacity: 0, transform: 'translateX(-100%)'}, 5)
        .to($('#ci2'), 0, {opacity: 1, transform: 'translateX(0)'}, 5)
        .to($('#icv-image'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 5)
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-145px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-120px'}, 6)
        .to($('.bottom-icv'), 0.1, {visibility: 'visible', left: '60px'}, 7)
    }

    if(window.innerWidth < 1750) {
        cc1
        .to($('#ci1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.card-mobile'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.mobile-main-message'), 0.1, {visibility: 'visible', transform: 'translateX(0)'}, 0.1)
        .to($('#message-1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-2'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-3'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-4'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-5'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.top-left'), 0.1, {visibility: 'visible', left: '-11rem'}, 0.9)
        .to($('.top-right'), 0.1, {visibility: 'visible', right: '-9rem'}, 1.9)
        .to($('.bottom-left'), 0.1, {visibility: 'visible', left: '-17rem'}, 3)
        .to($('.bottom-right'), 0.1, {visibility: 'visible', right: '-12rem'}, 4)
        .to($('#cc1'), 0.1, {opacity: 0, transform: 'translateX(-100%)'}, 5)
        .to($('#ci2'), 0, {opacity: 1, transform: 'translateX(0)'}, 5)
        .to($('#icv-image'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 5)
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-155px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-150px'}, 6)
        .to($('.bottom-icv'), 0.1, {visibility: 'visible', left: '60px'}, 7)
    }

    if(window.innerWidth < 1700) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-210px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-200px'}, 6)
    }

    if(window.innerWidth < 1680) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-230px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-220px'}, 6)
    }

    if(window.innerWidth < 1620) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-250px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-240px'}, 6)
    }

    if(window.innerWidth < 1570) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-270px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-260px'}, 6)
    }

    if(window.innerWidth < 1520) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-290px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-280px'}, 6)
    }

    if(window.innerWidth < 1470) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-310px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-300px'}, 6)
    }

    if(window.innerWidth < 1420) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-330px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-320px'}, 6)
    }

    if(window.innerWidth < 1400) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-480px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-460px'}, 6)
    }

    if(window.innerWidth < 1350) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-500px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-480px'}, 6)
    }

    if(window.innerWidth < 1250) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-520px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-500px'}, 6)
    }

    if(window.innerWidth < 1200) {
        cc1
        .to($('#ci1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.card-mobile'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.mobile-main-message'), 0.1, {visibility: 'visible', transform: 'translateX(0)'}, 0.1)
        .to($('#message-1'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-2'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-3'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-4'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('#message-5'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.top-left'), 0.1, {visibility: 'visible', left: '-11rem'}, 0.9)
        .to($('.top-right'), 0.1, {visibility: 'visible', right: '-9rem'}, 1.9)
        .to($('.bottom-left'), 0.1, {visibility: 'visible', left: '-17rem'}, 3)
        .to($('.bottom-right'), 0.1, {visibility: 'visible', right: '-12rem'}, 4)
        .to($('#cc1'), 0.1, {opacity: 0, transform: 'translateX(-100%)'}, 5)
        .to($('#ci2'), 0, {opacity: 1, transform: 'translateX(0)'}, 5)
        .to($('#icv-image'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 5)
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-260px', top: '40px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-270px', top: '300px'}, 6)
        .to($('.bottom-icv'), 0.1, {visibility: 'visible', left: '240px', bottom: '-140px'}, 7)
    }

    if(window.innerWidth < 950) {
        cc1
        .to($('.top-right'), 0.1, {visibility: 'visible', right: '-6rem'}, 1.9)
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-260px', top: '40px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-250px', top: '300px'}, 6)
        .to($('.bottom-icv'), 0.1, {visibility: 'visible', left: '150px', bottom: '-130px'}, 7)
    }

    if(window.innerWidth < 900) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-260px', top: '10px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-250px', top: '225px'}, 6)
    }

    if(window.innerWidth < 790) {
        cc1
        .to($('.top-right-icv'), 0, {visibility: 'visible', right: '-260px', top: '-30px'}, 5)
        .to($('.middle-right-icv'), 0.1, {visibility: 'visible', right: '-250px', top: '170px'}, 6)
        .to($('.bottom-icv'), 0.1, {visibility: 'visible', left: '-25px', bottom: '-140px'}, 7)
    }

    if(window.innerWidth < 730) {
        cc1
        .to($('.top-right'), 0.1, {visibility: 'visible', right: '-4rem'}, 1.9)
        .to($('.bottom-right'), 0.1, {visibility: 'visible', right: '-10rem'}, 4)
    }

    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#scrollable-card", 
        triggerHook: 0.05,
        duration: '100%',
    })
    .setPin('#scrollable-card')
    .setTween(cc1) 
    .addTo(controller);

    //SCENE 1

    //SCENE 2

    var controller2 = new ScrollMagic.Controller();
    var cc2 = new TimelineMax();

    cc2
    .to($('#ci3'), 0.1, {visibility: 'visible', transform: 'translateX(0)'}, 0.1)
    .to($('#focus-image'), 0.1, {visibility: 'visible', transform: 'translateX(0)'}, 0.1)
    .to($('#focus-image'), 0.1, {visibility: 'hidden'}, 1)
    .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '0', transform: 'scale(1)'}, 2)
    .to($('#focus-calendar'), 0.1, {visibility: 'visible', left: '37%', transform: 'scale(1)'}, 2.9)
    .to($('#focus-files'), 0.1, {visibility: 'visible', left: '37%', transform: 'scale(1)'}, 4)
    .to($('#focus-agenda'), 0.1, {visibility: 'visible', left: '30%', transform: 'scale(1)'}, 5)

    if(window.innerWidth < 1800) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '0', transform: 'scale(1)'}, 2)
        .to($('#focus-calendar'), 0.1, {visibility: 'visible', left: '41%', transform: 'scale(1)'}, 2.9)
        .to($('#focus-files'), 0.1, {visibility: 'visible', left: '41%', transform: 'scale(1)'}, 4)
        .to($('#focus-agenda'), 0.1, {visibility: 'visible', left: '34%', transform: 'scale(1)'}, 5)
    }

    if(window.innerWidth < 1700) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '25%', transform: 'scale(1)'}, 2)
        .to($('#focus-calendar'), 0.1, {visibility: 'visible', left: '52%', transform: 'scale(1)'}, 2.9)
        .to($('#focus-files'), 0.1, {visibility: 'visible', left: '52%', transform: 'scale(1)'}, 4)
        .to($('#focus-agenda'), 0.1, {visibility: 'visible', left: '48%', transform: 'scale(1)'}, 5)
    }

    if(window.innerWidth < 1650) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '23%', transform: 'scale(1)'}, 2)
    }

    if(window.innerWidth < 1550) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '21%', transform: 'scale(1)'}, 2)
    }

    if(window.innerWidth < 1470) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '19%', transform: 'scale(1)'}, 2)
    }

    if(window.innerWidth < 1400) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '18%', transform: 'scale(1)'}, 2)
    }

    if(window.innerWidth < 1380) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '17%', transform: 'scale(1)'}, 2)
    }

    if(window.innerWidth < 1350) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '16%', transform: 'scale(1)'}, 2)
    }

    if(window.innerWidth < 1320) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '10%', transform: 'scale(1)'}, 2)
        .to($('#focus-agenda'), 0.1, {visibility: 'visible', left: '43%', transform: 'scale(1)'}, 5)
    }

    if(window.innerWidth < 1300) {
        cc2
        .to($('#focus-image'), 0.1, {visibility: 'visible', transform: 'translateX(3%)'}, 0.1)
        .to($('#focus-image'), 0.1, {visibility: 'hidden'}, 1)
    }

    if(window.innerWidth < 1200) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '5%', transform: 'scale(1)'}, 2)
        .to($('#focus-agenda'), 0.1, {visibility: 'visible', left: '42%', transform: 'scale(1)'}, 5)
    }

    if(window.innerWidth < 1100) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '-10%', transform: 'scale(1)'}, 2)
        .to($('#focus-calendar'), 0.1, {visibility: 'visible', left: '51%', top: '-45px', transform: 'scale(1)'}, 2.9)
        .to($('#focus-files'), 0.1, {visibility: 'visible', left: '45%', top: '247px', transform: 'scale(1)'}, 4)
        .to($('#focus-agenda'), 0.1, {visibility: 'visible', left: '37%', top: '358px', transform: 'scale(1)'}, 5)
    }

    if(window.innerWidth < 900) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '-20%', transform: 'scale(1)'}, 2)
        .to($('#focus-calendar'), 0.1, {visibility: 'visible', left: '51%', top: '-45px', transform: 'scale(1)'}, 2.9)
        .to($('#focus-files'), 0.1, {visibility: 'visible', left: '48%', top: '247px', transform: 'scale(1)'}, 4)
        .to($('#focus-agenda'), 0.1, {visibility: 'visible', left: '37%', top: '358px', transform: 'scale(1)'}, 5)
    }

    if(window.innerWidth < 800) {
        cc2
        .to($('#focus-workflow'), 0.1, {visibility: 'visible', left: '-20%', transform: 'scale(1)'}, 2)
        .to($('#focus-calendar'), 0.1, {visibility: 'visible', left: '51%', top: '-45px', transform: 'scale(0.7)'}, 2.9)
        .to($('#focus-files'), 0.1, {visibility: 'visible', left: '48%', top: '247px', transform: 'scale(0.7)'}, 4)
        .to($('#focus-agenda'), 0.1, {visibility: 'visible', left: '37%', top: '358px', transform: 'scale(0.7)'}, 5)
    }


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

    var controllerM = new ScrollMagic.Controller();
    var cc1M = new TimelineMax();

        cc1M
        .to($('#ci1-m'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.card-mobile-m'), 0.1, {opacity: 1, transform: 'translateX(0)'}, 0.1)
        .to($('.mobile-main-message-m'), 0.1, { visibility: 'visible', transform: 'translateX(0)'}, 1)
        .to($('#message-1-m'), 0.1, { opacity: 1, transform: 'translateX(0)'}, 2)
        .to($('#message-2-m'), 0.1, { opacity: 1, transform: 'translateX(0)'}, 2)
        .to($('#message-3-m'), 0.1, { opacity: 1, transform: 'translateX(0)'}, 2)
        .to($('#message-4-m'), 0.1, { opacity: 1, transform: 'translateX(0)'}, 2)
        .to($('#message-5-m'), 0.1, { opacity: 1, transform: 'translateX(0)'}, 2)
        .to($('#message-1-m'), 0.1, { opacity: 0, transform: 'translateX(30%)'}, 3)
        .to($('#message-2-m'), 0.1, { opacity: 0, transform: 'translateX(30%)'}, 3)
        .to($('#message-3-m'), 0.1, { opacity: 0, transform: 'translateX(30%)'}, 3)
        .to($('#message-4-m'), 0.1, { opacity: 0, transform: 'translateX(30%)'}, 3)
        .to($('#message-5-m'), 0.1, { opacity: 0, transform: 'translateX(30%)'}, 3)
        .to($('.top-right-m'), 0.1, { visibility: 'visible', top: '40%', left: '18%'}, 3.1)
        .to($('.top-left-m'), 0.1, { visibility: 'visible', top: '65%', left: '16%'}, 4)
        .to($('.top-right-m'), 0.1, { visibility: 'hidden', top: '30%', left: '0%'}, 5)
        .to($('.top-left-m'), 0.1, { visibility: 'hidden', top: '55%', left: '0%'}, 5)
        .to($('.bottom-left-m'), 0.1, { visibility: 'visible', top: '33%', left: '16%'}, 5)
        .to($('.bottom-right-m'), 0.1, { visibility: 'visible', bottom: '0%', right: '16%'}, 6)
        .to($('.bottom-left-m'), 0.1, { visibility: 'hidden', top: '33%', left: '0%'}, 7)
        .to($('.bottom-right-m'), 0.1, { visibility: 'hidden', bottom: '0%', right: '0%'}, 7)
        .to($('#cc1-m'), 0.1, {opacity: 0, transform: 'translateX(100%)'}, 7.1)
        .to($('#ci2-m'), 0, {opacity: 1, transform: 'translateX(0)'}, 7.1)
        .to($('#icv-image-m'), 0, {visibility: 'visible', transform: 'translateX(0)'}, 7.1)
        .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '11%'}, 8)
        .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '15%'}, 9)
        .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%'}, 10)

        if(window.innerWidth < 670) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '7%'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '12%', top: '118%'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-78%'}, 10)
        }

        if(window.innerWidth < 640) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '6%'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '11%', top: '119%'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-83%'}, 10)
        }

        if(window.innerWidth < 600) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '0%'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '11%', top: '123%'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-94%', left: '-17%'}, 10)
        }
        
        if(window.innerWidth < 570) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '-10%'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '11%', top: '126%'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-102%', left: '-17%'}, 10)
        }

        if(window.innerWidth < 530) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '-11%'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '1%', top: '129%'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-112%', left: '-28%'}, 10)
        }

        if(window.innerWidth < 500) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '-3%', top: '90%'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '4%', top: '110%'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-48%', left: '-12%'}, 10)
        }

        if(window.innerWidth < 480) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '-3%', top: '90%', transform: 'scale(0.6)'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '3%', top: '114%', transform: 'scale(0.6)'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-58%', left: '-29%', transform: 'scale(0.4)'}, 10)
        }

        if(window.innerWidth < 430) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '-10%', top: '90%', transform: 'scale(0.6)'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '-3%', top: '114%', transform: 'scale(0.6)'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-58%', left: '-27%', transform: 'scale(0.4)'}, 10)
        }

        if(window.innerWidth < 430) {
            cc1M
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-58%', left: '-33%', transform: 'scale(0.4)'}, 10)
        }

        if(window.innerWidth < 380) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '-18%', top: '90%', transform: 'scale(0.6)'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '-6%', top: '114%', transform: 'scale(0.6)'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-58%', left: '-44%', transform: 'scale(0.4)'}, 10)
        }

        if(window.innerWidth < 350) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '-31.5%', top: '90%', transform: 'scale(0.6)'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '-17%', top: '114%', transform: 'scale(0.6)'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-58%', left: '-54%', transform: 'scale(0.4)'}, 10)
        }

        if(window.innerWidth < 330) {
            cc1M
            .to($('.top-right-icv-m'), 0, {visibility: 'visible', right: '-28.5%', top: '90%', transform: 'scale(0.6)'}, 8)
            .to($('.middle-right-icv-m'), 0.1, {visibility: 'visible', right: '-17%', top: '114%', transform: 'scale(0.6)'}, 9)
            .to($('.bottom-icv-m'), 0.1, {visibility: 'visible', left: '0%', bottom: '-58%', left: '-61%', transform: 'scale(0.4)'}, 10)
        }
        

    var sceneM = new ScrollMagic.Scene({
        triggerElement: "#scrollable-card-m", 
        triggerHook: 0.05,
        duration: '100%',
    })
    .setPin('#scrollable-card-m')
    .setTween(cc1M) 
    .addTo(controllerM);

//SCENE 1-m

});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function moveToHomePage() {
    location.replace("index.html");
}


