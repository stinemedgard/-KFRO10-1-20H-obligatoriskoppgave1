//definerer kartet og området den skal vise
//kilde: https://leafletjs.com/examples/quick-start/
var mymap = L.map('mapid').setView([60.2223203,10.3691027], 11)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
//lager en markør på hvor kistefos museet ligger
var kistefosMarker = L.marker([60.2223203,10.3691027]).addTo(mymap)
.bindPopup('Kistefos museet')
.openPopup();

//funksjon som henter den besøkendes lengde- og breddegrader ved hjelp av geolocalsjons-API'et 
//og plaserer en markør hvor den er
//og viser kjøreruten fra hvor den besøkende på siden er til kistefos museet
navigator.geolocation.getCurrentPosition(function(location) {
  //henter lengde- og breddegrader for den besøkende  
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
    var youMarker = L.marker(latlng).addTo(mymap)
    .bindPopup('Din nåværende posisjon')
.openPopup();

    //lager ruten fra den besøkendes markør til kistefos
    //kilde: http://www.liedman.net/leaflet-routing-machine/
    L.Routing.control({
        waypoints: [
          L.latLng(latlng),
          L.latLng(60.2223203,10.3691027)
        ]
      }).addTo(mymap);
  });
