$(document).ready(function () {
    $(".offer_header_btn_riseze").on("click", function (e) {
        var id = $(this).attr('id');

        if($(this).hasClass("offer_header_btn_riseze-open")){
            resizeOffer(id)
        }else{
            expendOffer(id);
        }

    });
});

function expendOffer(id) {
    $("#" + id + "-content").slideDown().show();
    $("#" + id).addClass("offer_header_btn_riseze-open");
}

function resizeOffer(id) {
    $("#" + id + "-content").slideUp().hide();
    $("#" + id).removeClass("offer_header_btn_riseze-open");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function moveToHomePage() {
    location.replace("index.html");
}