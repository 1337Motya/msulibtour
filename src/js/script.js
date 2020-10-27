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
  function hasWebP() {
    var rv = $.Deferred();
    var img = new Image();
    img.onload = function () { rv.resolve(); };
    img.onerror = function () { rv.reject(); };
    img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    return rv.promise();
  }

  hasWebP().then(
    function () {
      sessionStorage.webpSupport = true;
    },
    function () {
      sessionStorage.webpSupport = false;
    }
  );
})();
