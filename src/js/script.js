$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    speed: 3000,
    cssEase: "linear"
  });
});

(function testWebP() {
  var webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  webP.onload = webP.onerror = function () {
    localStorage.webpSupport = webP.height === 2;
  };
})();