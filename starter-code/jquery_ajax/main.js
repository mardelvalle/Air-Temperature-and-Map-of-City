
    var map;
    // function initMap() {
    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8
    //   });
    // }


      $("button").on('click', function() {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        var latitude = $("#latitude").val();
        var longitude = $("#longitude").val();
         var apiKey = "";
         var apiURL = "http://api.airvisual.com/v2/city?city="+latitude+"&state="+longitude+"&country=USA&key="+apiKey;
         var apiKey2 = "";
//the & makes it a parementer that needs to go after the other parameters

          var apiURL2 = "http://api.openweathermap.org/data/2.5/weather?q="+latitude+","+longitude+apiKey2;
         // var long =.data.location.coordinates[1]
         $.ajax({
           url: apiURL,
           success: function(response){
             var newLng = response.data.location.coordinates[0]
             var newLat = response.data.location.coordinates[1]
             console.log(response.data.current.pollution.maincn);
             $("#mapin").text(response.data.current.pollution.maincn)
             console.log(newLat)
             console.log(newLng)
             console.log(apiURL)
  $.ajax({
    url:apiURL2,
    success:function(t){
      $("h5").append((1.8*(t.main.temp-273)+32).toFixed(3)+"F")
      console.log((1.8*(t.main.temp-273)+32));
      // placing the temperature and doing the appropriate math
    },
    error(r){
      conseol.log(r)
    }

  })
            //  center = new google.maps.LatLng(newLat, newLng);
            //   // using global variable:
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: newLat, lng: newLng},
              zoom: 11
            });
              // map.panTo(center);

           },
           error: function(r){
             console.log(r);
           }
         })

      });
    // }



// var gKey="AIzaSyC3ZpLqYjRKgFNds7e0By2Dm9rMPNcHydM"
// var gURL="https://maps.googleapis.com/maps/api/js?key="+gKey+"&callback=initMap"
// var latitude=$("#latitude").val();
// var longitude =$("#longitude").val();
// $.ajax({
//   url:gURL,
//   success:function(res){
//     console.log(res);
//   },
//   error:function(re){
//   console.log(re);
// }
//
// })
// var map;
// function initMap() {
//   console.log(google)
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }
