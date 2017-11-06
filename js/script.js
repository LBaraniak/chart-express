// validate contact form
$(function() {
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });
  $('#contact-form').validate({
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
      }
    },
    messages: {
      name: {
        required: "Musisz wpisać swoje imię",
        minlength: "Twoje imię musi być dłuższe niż 2 znaki"
      },
      email: {
        required: "Musisz podać swój adres email"
      },
      message: {
        required: "Napisz nam proszę o co chcesz spytać",
        minlength: "thats all? really?"
      }

    },
    submitHandler: function(form) {
      $(form).ajaxSubmit({
        type:"POST",
        data: $(form).serialize(),
        url:"http://chart-express.pl/test/mail.php",
        success: function() {
          $('#contact-form :input').attr('disabled', 'disabled');
          $('#contact-form').fadeTo( "slow", 0.3, function() {
            $(this).find(':input').attr('disabled', 'disabled');
            // $(this).find('label').css('cursor','default');
            $('#success').fadeIn();
          });
        },
        error: function() {
          $('#contact=form').fadeTo( "slow", 0.3, function() {
            $('#error').fadeIn();
          });
        }
      });
    }
  });

  //ogsługa galerii
  lightbox.option({
    showImageNumberLabel: false,
    wrapAround: true
  });

  //obsługa mapy
  initMap();
  strefa1.setMap(map);
  strefa2.setMap(map);
  strefa3.setMap(map);
  $('input').on('click', function(){

    if($(this).hasClass('active')){
      $(this).removeClass('active');
      var test = $(this).val();
      if(test == "strefa1") {
        strefa1.setMap(null);
      }else if(test == "strefa2") {
        strefa2.setMap(null);
      }else{
        strefa3.setMap(null);
      }

    }else{
      $(this).addClass('active');
      var test = $(this).val();
      if(test == "strefa1") {
        strefa1.setMap(map);
      }else if(test == "strefa2") {
        strefa2.setMap(map);
      }else{
        strefa3.setMap(map);
      }
    }

  });

});

//slider w galerii
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  slidesPerView: 4,
  paginationClickable: true,
  spaceBetween: 30,
  autoplay: 2000,
  loop: true,
  centeredSlides: true,
  autoplayDisableOnInteraction:true,
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

$(".swiper-container").mouseenter(function(){
    swiper.stopAutoplay();
});

$(".swiper-container").mouseleave(function(){
    swiper.startAutoplay();
});

//obsługa mapy google
var map;
var strefa1;
var strefa2;
var strefa3;

function initMap() {
  var chart = {lat: 52.404308, lng: 16.915097};
  map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 13,
    center: chart,
    mapTypeControl: false,
    styles: [
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "color": "#e94f3f"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "gamma": "0.50"
          },
          {
            "hue": "#ff4a00"
          },
          {
            "lightness": "-79"
          },
          {
            "saturation": "-86"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#ff1700"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "color": "#e74231"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#4d6447"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          {
            "color": "#f0ce41"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
          {
            "color": "#363f42"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "color": "#231f20"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6c5e53"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "color": "#313639"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#0e171d"
          }
        ]
      }
    ]
  });
  // var contentString = '<b>Chart-express</b>';
  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });
  // var marker = new google.maps.Marker({
  //   position: chart,
  //   icon: './img/pin_mapa.png',
  //   map: map
  // });
  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });

  // Define the LatLng coordinates for the polygon's path.
  var strefa1Coords = [
    {lng: 16.9395018, lat: 52.4161105},
    {lng: 16.936326, lat: 52.4168173},
    {lng: 16.9324851, lat: 52.4172753},
    {lng: 16.9314337, lat: 52.4178773},
    {lng: 16.9298673, lat: 52.4185971},
    {lng: 16.9271207, lat: 52.4196702},
    {lng: 16.9227862, lat: 52.4213321},
    {lng: 16.9178295, lat: 52.4219341},
    {lng: 16.9121861, lat: 52.423295},
    {lng: 16.9117999, lat: 52.4236221},
    {lng: 16.9097185, lat: 52.4239362},
    {lng: 16.9085169, lat: 52.421306},
    {lng: 16.9083452, lat: 52.4204816},
    {lng: 16.9075298, lat: 52.4185055},
    {lng: 16.9073153, lat: 52.4180344},
    {lng: 16.9069719, lat: 52.4177726},
    {lng: 16.9062424, lat: 52.4170528},
    {lng: 16.9050622, lat: 52.4146447},
    {lng: 16.9050837, lat: 52.4142652},
    {lng: 16.9044399, lat: 52.4136238},
    {lng: 16.9038177, lat: 52.4132574},
    {lng: 16.9034743, lat: 52.4128255},
    {lng: 16.8975949, lat: 52.4141474},
    {lng: 16.8944192, lat: 52.4087809},
    {lng: 16.8931317, lat: 52.4051942},
    {lng: 16.8925309, lat: 52.405168},
    {lng: 16.8923163, lat: 52.4032698},
    {lng: 16.8928957, lat: 52.3994601},
    {lng: 16.89605, lat: 52.3988971},
    {lng: 16.8936896, lat: 52.3954405},
    {lng: 16.8950415, lat: 52.395087},
    {lng: 16.8966722, lat: 52.3945501},
    {lng: 16.9007707, lat: 52.3932538},
    {lng: 16.9021225, lat: 52.3931753},
    {lng: 16.9032168, lat: 52.3932276},
    {lng: 16.9031525, lat: 52.3930443},
    {lng: 16.9137311, lat: 52.3922586},
    {lng: 16.9121003, lat: 52.3905694},
    {lng: 16.9172931, lat: 52.3919182},
    {lng: 16.9199967, lat: 52.3922979},
    {lng: 16.9202113, lat: 52.3917218},
    {lng: 16.9250178, lat: 52.3915515},
    {lng: 16.9462395, lat: 52.3883039},
    {lng: 16.9463897, lat: 52.3885658},
    {lng: 16.946497, lat: 52.3888146},
    {lng: 16.9467115, lat: 52.3892861},
    {lng: 16.9503593, lat: 52.3956893},
    {lng: 16.9525051, lat: 52.3993292},
    {lng: 16.9537067, lat: 52.4012144},
    {lng: 16.9545221, lat: 52.4023927},
    {lng: 16.9544792, lat: 52.4032829},
    {lng: 16.954093, lat: 52.4041993},
    {lng: 16.9538355, lat: 52.4058487},
    {lng: 16.9542217, lat: 52.406608},
    {lng: 16.9567966, lat: 52.4100375},
    {lng: 16.9581699, lat: 52.4117653},
    {lng: 16.9579554, lat: 52.4123674},
    {lng: 16.9570541, lat: 52.4134406},
    {lng: 16.9569254, lat: 52.4142259},
    {lng: 16.9544792, lat: 52.4139118},
    {lng: 16.9510031, lat: 52.4143568},
    {lng: 16.9395018, lat: 52.4161105}
  ];

  // Construct the polygon.
  strefa1 = new google.maps.Polygon({
    paths: strefa1Coords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  var strefa2Coords = [
    {lng: 16.9783294, lat: 52.4265335},
    {lng: 16.9662273, lat: 52.4275933},
    {lng: 16.9634378, lat: 52.4294119},
    {lng: 16.9555199, lat: 52.4353515},
    {lng: 16.9522154, lat: 52.4388049},
    {lng: 16.9504559, lat: 52.4399037},
    {lng: 16.948353, lat: 52.4407539},
    {lng: 16.9435036, lat: 52.4422451},
    {lng: 16.9411003, lat: 52.4426244},
    {lng: 16.9375169, lat: 52.4427028},
    {lng: 16.9290411, lat: 52.4433045},
    {lng: 16.916703, lat: 52.4429121},
    {lng: 16.9129265, lat: 52.4431606},
    {lng: 16.9091928, lat: 52.4433176},
    {lng: 16.9092142, lat: 52.4431868},
    {lng: 16.9096434, lat: 52.4420489},
    {lng: 16.9097078, lat: 52.4396683},
    {lng: 16.9083559, lat: 52.4375099},
    {lng: 16.9074333, lat: 52.4365942},
    {lng: 16.9059098, lat: 52.4349721},
    {lng: 16.9041502, lat: 52.4321332},
    {lng: 16.9017255, lat: 52.4302493},
    {lng: 16.8986142, lat: 52.4281036},
    {lng: 16.8967903, lat: 52.4265335},
    {lng: 16.8957174, lat: 52.4248325},
    {lng: 16.893636, lat: 52.4202525},
    {lng: 16.8832719, lat: 52.4220584},
    {lng: 16.8750322, lat: 52.4234324},
    {lng: 16.8730795, lat: 52.4209199},
    {lng: 16.8719852, lat: 52.4189177},
    {lng: 16.8697536, lat: 52.4145727},
    {lng: 16.8694317, lat: 52.4125178},
    {lng: 16.8676293, lat: 52.4077271},
    {lng: 16.8668139, lat: 52.4044545},
    {lng: 16.8614924, lat: 52.3975419},
    {lng: 16.8613851, lat: 52.3970575},
    {lng: 16.861428, lat: 52.3966909},
    {lng: 16.8653977, lat: 52.3922259},
    {lng: 16.8661487, lat: 52.3918461},
    {lng: 16.8732083, lat: 52.3908378},
    {lng: 16.8756974, lat: 52.389358},
    {lng: 16.8777788, lat: 52.3878913},
    {lng: 16.8787229, lat: 52.3870139},
    {lng: 16.8818557, lat: 52.3846434},
    {lng: 16.8843877, lat: 52.3828491},
    {lng: 16.8881214, lat: 52.3806356},
    {lng: 16.8889153, lat: 52.380688},
    {lng: 16.8968761, lat: 52.379758},
    {lng: 16.8979919, lat: 52.3808845},
    {lng: 16.8985283, lat: 52.381762},
    {lng: 16.9014037, lat: 52.3844339},
    {lng: 16.9031846, lat: 52.3839755},
    {lng: 16.9041717, lat: 52.3864377},
    {lng: 16.908313, lat: 52.3859269},
    {lng: 16.911124, lat: 52.3859269},
    {lng: 16.9129693, lat: 52.3855471},
    {lng: 16.9150722, lat: 52.3844863},
    {lng: 16.9174325, lat: 52.38391},
    {lng: 16.9214666, lat: 52.3833075},
    {lng: 16.9284832, lat: 52.3826265},
    {lng: 16.9337404, lat: 52.3820502},
    {lng: 16.9374955, lat: 52.3814346},
    {lng: 16.9390619, lat: 52.3810286},
    {lng: 16.9554555, lat: 52.3759987},
    {lng: 16.9575369, lat: 52.3776361},
    {lng: 16.9588029, lat: 52.3783172},
    {lng: 16.9646823, lat: 52.3797318},
    {lng: 16.9666993, lat: 52.3808059},
    {lng: 16.9695961, lat: 52.3834123},
    {lng: 16.9721711, lat: 52.3847613},
    {lng: 16.9758832, lat: 52.3860841},
    {lng: 16.9766343, lat: 52.3865424},
    {lng: 16.9799816, lat: 52.3899211},
    {lng: 16.9802391, lat: 52.3906414},
    {lng: 16.9804966, lat: 52.3923568},
    {lng: 16.981312, lat: 52.3937448},
    {lng: 16.9829428, lat: 52.3959838},
    {lng: 16.9850242, lat: 52.3976074},
    {lng: 16.9872129, lat: 52.3992702},
    {lng: 16.9884789, lat: 52.3998332},
    {lng: 16.9886505, lat: 52.4001867},
    {lng: 16.9886291, lat: 52.4010507},
    {lng: 16.9892084, lat: 52.4026348},
    {lng: 16.9872129, lat: 52.4031716},
    {lng: 16.9853461, lat: 52.4039178},
    {lng: 16.9841015, lat: 52.4050829},
    {lng: 16.9828141, lat: 52.4066145},
    {lng: 16.9823849, lat: 52.4071643},
    {lng: 16.9812262, lat: 52.4085649},
    {lng: 16.9802821, lat: 52.4094943},
    {lng: 16.9793594, lat: 52.4108817},
    {lng: 16.9787156, lat: 52.4116278},
    {lng: 16.9769776, lat: 52.4136434},
    {lng: 16.9753682, lat: 52.4155935},
    {lng: 16.9753682, lat: 52.4169415},
    {lng: 16.9755185, lat: 52.4183157},
    {lng: 16.975733, lat: 52.4189046},
    {lng: 16.9763553, lat: 52.4193364},
    {lng: 16.9757759, lat: 52.4202132},
    {lng: 16.976012, lat: 52.4222808},
    {lng: 16.9768059, lat: 52.4234585},
    {lng: 16.9775355, lat: 52.4246624},
    {lng: 16.9780075, lat: 52.4254998},
    {lng: 16.9783294, lat: 52.4265335}
  ];

  var strefa3Coords =[
    {lng: 16.9395018, lat: 52.4161105},
    {lng: 16.9510031, lat: 52.4143568},
    {lng: 16.9544792, lat: 52.4139118},
    {lng: 16.9569254, lat: 52.4142259},
    {lng: 16.9570541, lat: 52.4134406},
    {lng: 16.9579554, lat: 52.4123674},
    {lng: 16.9581699, lat: 52.4117653},
    {lng: 16.9567966, lat: 52.4100375},
    {lng: 16.9542217, lat: 52.406608},
    {lng: 16.9538355, lat: 52.4058487},
    {lng: 16.954093, lat: 52.4041993},
    {lng: 16.9544792, lat: 52.4032829},
    {lng: 16.9545221, lat: 52.4023927},
    {lng: 16.9537067, lat: 52.4012144},
    {lng: 16.9525051, lat: 52.3993292},
    {lng: 16.9503593, lat: 52.3956893},
    {lng: 16.9467115, lat: 52.3892861},
    {lng: 16.946497, lat: 52.3888146},
    {lng: 16.9463897, lat: 52.3885658},
    {lng: 16.9462395, lat: 52.3883039},
    {lng: 16.9250178, lat: 52.3915515},
    {lng: 16.9202113, lat: 52.3917218},
    {lng: 16.9199967, lat: 52.3922979},
    {lng: 16.9172931, lat: 52.3919182},
    {lng: 16.9121003, lat: 52.3905694},
    {lng: 16.9137311, lat: 52.3922586},
    {lng: 16.9031525, lat: 52.3930443},
    {lng: 16.9032168, lat: 52.3932276},
    {lng: 16.9021225, lat: 52.3931753},
    {lng: 16.9007707, lat: 52.3932538},
    {lng: 16.8966722, lat: 52.3945501},
    {lng: 16.8950415, lat: 52.395087},
    {lng: 16.8936896, lat: 52.3954405},
    {lng: 16.89605, lat: 52.3988971},
    {lng: 16.8928957, lat: 52.3994601},
    {lng: 16.8923163, lat: 52.4032698},
    {lng: 16.8925309, lat: 52.405168},
    {lng: 16.8931317, lat: 52.4051942},
    {lng: 16.8944192, lat: 52.4087809},
    {lng: 16.8975949, lat: 52.4141474},
    {lng: 16.9034743, lat: 52.4128255},
    {lng: 16.9038177, lat: 52.4132574},
    {lng: 16.9044399, lat: 52.4136238},
    {lng: 16.9050837, lat: 52.4142652},
    {lng: 16.9050622, lat: 52.4146447},
    {lng: 16.9062424, lat: 52.4170528},
    {lng: 16.9069719, lat: 52.4177726},
    {lng: 16.9073153, lat: 52.4180344},
    {lng: 16.9075298, lat: 52.4185055},
    {lng: 16.9083452, lat: 52.4204816},
    {lng: 16.9085169, lat: 52.421306},
    {lng: 16.9097185, lat: 52.4239362},
    {lng: 16.9117999, lat: 52.4236221},
    {lng: 16.9121861, lat: 52.423295},
    {lng: 16.9178295, lat: 52.4219341},
    {lng: 16.9227862, lat: 52.4213321},
    {lng: 16.9271207, lat: 52.4196702},
    {lng: 16.9298673, lat: 52.4185971},
    {lng: 16.9314337, lat: 52.4178773},
    {lng: 16.9324851, lat: 52.4172753},
    {lng: 16.936326, lat: 52.4168173},
    {lng: 16.9395018, lat: 52.4161105}

  ];

  // Construct the polygon.
  strefa2 = new google.maps.Polygon({
    paths: [strefa2Coords, strefa3Coords],
    strokeColor: '#FFf000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFf000',
    fillOpacity: 0.35
  });


  var strefa4Coords = [
    {lng: 17.069707, lat: 52.4241979},
    {lng: 17.0711231, lat: 52.4253624},
    {lng: 17.0721102, lat: 52.4266316},
    {lng: 17.0123291, lat: 52.4276522},
    {lng: 17.0079517, lat: 52.439374},
    {lng: 16.9786835, lat: 52.440839},
    {lng: 16.971302, lat: 52.5020117},
    {lng: 16.9453812, lat: 52.4992425},
    {lng: 16.8883896, lat: 52.4945396},
    {lng: 16.8909645, lat: 52.4865436},
    {lng: 16.8879604, lat: 52.4843483},
    {lng: 16.8872738, lat: 52.4814212},
    {lng: 16.8898487, lat: 52.477971},
    {lng: 16.9001484, lat: 52.4718543},
    {lng: 16.8981743, lat: 52.4652137},
    {lng: 16.8887329, lat: 52.4648477},
    {lng: 16.8707085, lat: 52.4652137},
    {lng: 16.8614388, lat: 52.4663118},
    {lng: 16.8568039, lat: 52.4697106},
    {lng: 16.8533707, lat: 52.4752003},
    {lng: 16.843071, lat: 52.4766641},
    {lng: 16.8298531, lat: 52.4694491},
    {lng: 16.8180943, lat: 52.4710177},
    {lng: 16.8134594, lat: 52.4766118},
    {lng: 16.8084812, lat: 52.4785984},
    {lng: 16.801572, lat: 52.48001},
    {lng: 16.7953491, lat: 52.4811598},
    {lng: 16.7926884, lat: 52.4741024},
    {lng: 16.7826462, lat: 52.4834075},
    {lng: 16.7789555, lat: 52.482728},
    {lng: 16.7756939, lat: 52.4784415},
    {lng: 16.7637634, lat: 52.4780756},
    {lng: 16.7593002, lat: 52.4767164},
    {lng: 16.7506313, lat: 52.471436},
    {lng: 16.7728615, lat: 52.4650568},
    {lng: 16.8003273, lat: 52.4373857},
    {lng: 16.8010998, lat: 52.4331995},
    {lng: 16.8022155, lat: 52.4216332},
    {lng: 16.797924, lat: 52.4144091},
    {lng: 16.8044472, lat: 52.404304},
    {lng: 16.7971516, lat: 52.4023665},
    {lng: 16.8107986, lat: 52.390792},
    {lng: 16.8053913, lat: 52.3879634},
    {lng: 16.8089962, lat: 52.3859728},
    {lng: 16.7899418, lat: 52.3762279},
    {lng: 16.8256474, lat: 52.377957},
    {lng: 16.8344879, lat: 52.370097},
    {lng: 16.8297672, lat: 52.3583044},
    {lng: 16.8248749, lat: 52.3568891},
    {lng: 16.842041, lat: 52.3444637},
    {lng: 16.8487358, lat: 52.3496545},
    {lng: 16.8516541, lat: 52.348868},
    {lng: 16.8659878, lat: 52.3590645},
    {lng: 16.884141, lat: 52.3554737},
    {lng: 16.9028091, lat: 52.3548971},
    {lng: 16.9032383, lat: 52.3449094},
    {lng: 16.911478, lat: 52.3332412},
    {lng: 16.9249535, lat: 52.3295172},
    {lng: 16.9897556, lat: 52.3290451},
    {lng: 16.9994545, lat: 52.3372533},
    {lng: 17.0203114, lat: 52.3326118},
    {lng: 17.0382929, lat: 52.3285993},
    {lng: 17.0455885, lat: 52.3387217},
    {lng: 17.04988, lat: 52.3432315},
    {lng: 17.0579481, lat: 52.360008},
    {lng: 17.0573044, lat: 52.368289},
    {lng: 17.0476056, lat: 52.3874919},
    {lng: 17.0477772, lat: 52.3905825},
    {lng: 17.0505238, lat: 52.3942228},
    {lng: 17.0452023, lat: 52.3982294},
    {lng: 17.0378208, lat: 52.4019476},
    {lng: 17.038722, lat: 52.4035186},
    {lng: 17.0432281, lat: 52.4038589},
    {lng: 17.0466185, lat: 52.4061629},
    {lng: 17.0447731, lat: 52.40865},
    {lng: 17.0638704, lat: 52.4157703},
    {lng: 17.0688057, lat: 52.4230725}
  ];

  var strefa5Coords = [
    {lng: 16.9783294, lat: 52.4265335},
    {lng: 16.9780075, lat: 52.4254998},
    {lng: 16.9775355, lat: 52.4246624},
    {lng: 16.9768059, lat: 52.4234585},
    {lng: 16.976012, lat: 52.4222808},
    {lng: 16.9757759, lat: 52.4202132},
    {lng: 16.9763553, lat: 52.4193364},
    {lng: 16.975733, lat: 52.4189046},
    {lng: 16.9755185, lat: 52.4183157},
    {lng: 16.9753682, lat: 52.4169415},
    {lng: 16.9753682, lat: 52.4155935},
    {lng: 16.9769776, lat: 52.4136434},
    {lng: 16.9787156, lat: 52.4116278},
    {lng: 16.9793594, lat: 52.4108817},
    {lng: 16.9802821, lat: 52.4094943},
    {lng: 16.9812262, lat: 52.4085649},
    {lng: 16.9823849, lat: 52.4071643},
    {lng: 16.9828141, lat: 52.4066145},
    {lng: 16.9841015, lat: 52.4050829},
    {lng: 16.9853461, lat: 52.4039178},
    {lng: 16.9872129, lat: 52.4031716},
    {lng: 16.9892084, lat: 52.4026348},
    {lng: 16.9886291, lat: 52.4010507},
    {lng: 16.9886505, lat: 52.4001867},
    {lng: 16.9884789, lat: 52.3998332},
    {lng: 16.9872129, lat: 52.3992702},
    {lng: 16.9850242, lat: 52.3976074},
    {lng: 16.9829428, lat: 52.3959838},
    {lng: 16.981312, lat: 52.3937448},
    {lng: 16.9804966, lat: 52.3923568},
    {lng: 16.9802391, lat: 52.3906414},
    {lng: 16.9799816, lat: 52.3899211},
    {lng: 16.9766343, lat: 52.3865424},
    {lng: 16.9758832, lat: 52.3860841},
    {lng: 16.9721711, lat: 52.3847613},
    {lng: 16.9695961, lat: 52.3834123},
    {lng: 16.9666993, lat: 52.3808059},
    {lng: 16.9646823, lat: 52.3797318},
    {lng: 16.9588029, lat: 52.3783172},
    {lng: 16.9575369, lat: 52.3776361},
    {lng: 16.9554555, lat: 52.3759987},
    {lng: 16.9390619, lat: 52.3810286},
    {lng: 16.9374955, lat: 52.3814346},
    {lng: 16.9337404, lat: 52.3820502},
    {lng: 16.9284832, lat: 52.3826265},
    {lng: 16.9214666, lat: 52.3833075},
    {lng: 16.9174325, lat: 52.38391},
    {lng: 16.9150722, lat: 52.3844863},
    {lng: 16.9129693, lat: 52.3855471},
    {lng: 16.911124, lat: 52.3859269},
    {lng: 16.908313, lat: 52.3859269},
    {lng: 16.9041717, lat: 52.3864377},
    {lng: 16.9031846, lat: 52.3839755},
    {lng: 16.9014037, lat: 52.3844339},
    {lng: 16.8985283, lat: 52.381762},
    {lng: 16.8979919, lat: 52.3808845},
    {lng: 16.8968761, lat: 52.379758},
    {lng: 16.8889153, lat: 52.380688},
    {lng: 16.8881214, lat: 52.3806356},
    {lng: 16.8843877, lat: 52.3828491},
    {lng: 16.8818557, lat: 52.3846434},
    {lng: 16.8787229, lat: 52.3870139},
    {lng: 16.8777788, lat: 52.3878913},
    {lng: 16.8756974, lat: 52.389358},
    {lng: 16.8732083, lat: 52.3908378},
    {lng: 16.8661487, lat: 52.3918461},
    {lng: 16.8653977, lat: 52.3922259},
    {lng: 16.861428, lat: 52.3966909},
    {lng: 16.8613851, lat: 52.3970575},
    {lng: 16.8614924, lat: 52.3975419},
    {lng: 16.8668139, lat: 52.4044545},
    {lng: 16.8676293, lat: 52.4077271},
    {lng: 16.8694317, lat: 52.4125178},
    {lng: 16.8697536, lat: 52.4145727},
    {lng: 16.8719852, lat: 52.4189177},
    {lng: 16.8730795, lat: 52.4209199},
    {lng: 16.8750322, lat: 52.4234324},
    {lng: 16.8832719, lat: 52.4220584},
    {lng: 16.893636, lat: 52.4202525},
    {lng: 16.8957174, lat: 52.4248325},
    {lng: 16.8967903, lat: 52.4265335},
    {lng: 16.8986142, lat: 52.4281036},
    {lng: 16.9017255, lat: 52.4302493},
    {lng: 16.9041502, lat: 52.4321332},
    {lng: 16.9059098, lat: 52.4349721},
    {lng: 16.9074333, lat: 52.4365942},
    {lng: 16.9083559, lat: 52.4375099},
    {lng: 16.9097078, lat: 52.4396683},
    {lng: 16.9096434, lat: 52.4420489},
    {lng: 16.9092142, lat: 52.4431868},
    {lng: 16.9091928, lat: 52.4433176},
    {lng: 16.9129265, lat: 52.4431606},
    {lng: 16.916703, lat: 52.4429121},
    {lng: 16.9290411, lat: 52.4433045},
    {lng: 16.9375169, lat: 52.4427028},
    {lng: 16.9411003, lat: 52.4426244},
    {lng: 16.9435036, lat: 52.4422451},
    {lng: 16.948353, lat: 52.4407539},
    {lng: 16.9504559, lat: 52.4399037},
    {lng: 16.9522154, lat: 52.4388049},
    {lng: 16.9555199, lat: 52.4353515},
    {lng: 16.9634378, lat: 52.4294119},
    {lng: 16.9662273, lat: 52.4275933},
    {lng: 16.9783294, lat: 52.4265335}

  ];

  // Construct the polygon.
  strefa3 = new google.maps.Polygon({
    paths: [strefa4Coords, strefa5Coords],
    strokeColor: '#FF00f0',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF00f0',
    fillOpacity: 0.35
  });

};
