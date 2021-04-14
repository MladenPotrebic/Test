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

    
  });

  function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function moveToHomePage() {
    location.replace("index.html");
}