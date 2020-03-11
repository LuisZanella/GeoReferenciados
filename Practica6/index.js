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
    url:
      "https://pngimage.net/wp-content/uploads/2018/06/we-are-here-png-2.png",
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
    }, 5000);
}

movePosition = marker => {
  navigator.geolocation.getCurrentPosition(position => {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    location = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    marker.setPosition(location);
    map.pantTo(location);
    map.setCenter(pos);
  });
};
