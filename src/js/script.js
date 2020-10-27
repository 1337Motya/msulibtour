$(document).ready(function () {
  var slider = $(".slider");
  if (slider.length) {
    slider.slick({
      autoplay: true,
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      speed: 3000,
      cssEase: "linear"
    });
  }
});


(function canIuseWebp() {
  var webP = new Image();
    webP.onload = webP.onerror = function () {
      sessionStorage.webpSupport = webP.height == 2;
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
})();
