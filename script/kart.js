var mymap = L.map('mapid').setView([60.2223203,10.3691027], 11)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
    }).addTo(mymap);

var kistefosMarker = L.marker([60.2223203,10.3691027]).addTo(mymap);


navigator.geolocation.getCurrentPosition(function(location) {
    var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    var youMarker = L.marker(latlng).addTo(mymap);

    L.Routing.control({
        waypoints: [
          L.latLng(latlng),
          L.latLng(60.2223203,10.3691027)
        ]
      }).addTo(mymap);
  });
