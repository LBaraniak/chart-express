// jQuery.validator.addMethod('answercheck', function (value, element) {
//         return this.optional(element) || /^\bcat\b$/.test(value);
//     }, "type the correct answer -_-");

// validate contact form
$(function() {
      $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
    });
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            answer: {
                required: true,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "Musisz wpisać swoje imię i nazwisko",
                minlength: "Twoje imię i nazwisko musi być dłuższe niż 2 znaki"
            },
            email: {
                required: "Musisz podać swój adres email"
            },
            message: {
                required: "Napisz nam proszę o co chcesz spytać",
                minlength: "thats all? really?"
            }
            // answer: {
            //     required: "sorry, wrong answer!"
            // }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"http://mylaq.pl/aplikacje/mail.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.3, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        // $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.3, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});


// var swiper = new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
//        nextButton: '.swiper-button-next',
//        prevButton: '.swiper-button-prev',
//        autoplay: 6000,
//        slidesPerView: 3,
//        slidesPerColumn: 2,
//        paginationClickable: true,
//        slideToClickedSlide: true,
//        slidesPerGroup: 3,
//     //    loop: true,
//        spaceBetween: 30
//    });

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 3000,
        loop: true,
        centeredSlides: true,
        
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
    });

function initMap() {
        var showroom = {lat: 52.404308, lng: 16.915097};
        var map = new google.maps.Map(document.getElementById('map1'), {
          zoom: 16,
          center: showroom,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#F7F7F7"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#fff"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575",
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {

                  "visibility": "off"
                }
              ]
            },


            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#EDEDED"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
        });
        var contentString = '<b>Showroom NeoNail</b><br>ul. Towarowa 41/201<br>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        var marker = new google.maps.Marker({
          position: showroom,
          icon: './img/map_icon.png',

          map: map
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
initMap();
