//headerLogoUl
$(function () {
    $(".headerLogoUlSp__flex__icon__img").on("click", (e) => {
      $(".headerLogoUlSp__ham").toggleClass("is-active");
    });
  });

  // mainCarousel
  $(document).on("ready", function () {
    $(".mainCarousel__photo").slick({
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 1500,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
    });
  });

  // photoGallery3
  $(document).on("ready", function () {
    $(".photoGallery3Sp").slick({
      arrows: true,
      dots: true,
      autoplay: false,
      autoplaySpeed: 1500,
      speed: 1500,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
    });
  });

  // mapTable
  function initMap() {
    var latlng = new google.maps.LatLng(34.6852112, 135.5257176);
    var myOptions = {
      zoom: 16,
      center: latlng,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      draggable: false,
      mapTypeControlOptions: {
        mapTypeIds: [
          "style",
          google.maps.MapTypeId.ROADMAP,
          google.maps.MapTypeId.SATELLITE,
        ],
      },
    };
  
    var map = new google.maps.Map(
      document.getElementById("google-map"),
      myOptions
    );
  
    var markerOptions = {
      position: latlng,
      map: map,
      title: "Kirameki Total Beauty",
      animation: google.maps.Animation.DROP,
    };
  
    var marker = new google.maps.Marker(markerOptions);
  }

   