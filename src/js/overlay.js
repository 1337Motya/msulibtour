$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
    $(".navBurger").removeClass("animateNav");
});

$(".overlay a").click(function () {
    $("#navToggle").toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
});

function jump() {
    $(".navBurger").toggleClass("animateNav");
}

var timer = setInterval(jump, 15000);