var map;
// var coordinates = new google.maps.LatLng(0, 0);
var coordinates = {
  lat: 0,
  lng: 0
};
var props = {
  center: coordinates,
  zoom: 20
};
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), props);
  var icono = {
    url: "",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };
  var marker = new google.maps.Marker({
    position: { lat: 0, lng: 0 },
    icono: icono,
    scaledSize: new google.maps.Size(50, 50),
    map: map
  });
  if (navigator.geolocation)
    setInterval(() => {
      movePosition(marker);
    }, 3000);
}

function movePosition(marker) {
  navigator.geolocation.getCurrentPosition(position => {
    location = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    marker.setPosition(location);
    map.pantTo(location);
    map.setCenter(location);
  });
}
