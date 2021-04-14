// Navigations
$(".navigations_btn").click(function () {

    $(this).toggleClass("navigations_btn-close");
    $(".content_background").toggleClass("content_background-active");
    $(".content_navigations").toggleClass("content_navigations-active");

    return false;
});