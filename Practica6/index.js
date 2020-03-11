// var coordinates = new google.maps.LatLng(0, 0);
var map;
var coordinates = {
  center: { lat: 0, lng: 0 },
  zoom: 20
};

function initMap(params) {
  map = new google.maps.Map(document.getElementById("map"), coordinates);
  var icon = {
    url:
      "https://pngimage.net/wp-content/uploads/2018/06/we-are-here-png-2.png",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0)
  };
  var marker = new google.maps.Marker({
    position: coordinates.center,
    icon,
    map
  });
  if (navigator.geolocation) {
    movePosition(marker);
    setInterval(() => {
      movePosition(marker);
    }, 3000);
  }
}

function movePosition(marker) {
  navigator.geolocation.getCurrentPosition(position => {
    let location = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    marker.setPosition(location);
    map.panTo(location);
    map.setCenter(location);
  });
}
