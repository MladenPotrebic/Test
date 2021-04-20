// Navigations
var navActive = false;

function toggleNav() {
    $("#nav").toggleClass("navigations--active");
    $("#nav_bg").toggleClass("navigations--active");
}

// Animations AOS
$(window).on("load",function() {
    AOS.init();
});