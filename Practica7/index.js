var localidades = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: 21.113918, lng: -101.687833 },
  { lat: 22.141439, lng: -100.928243 },
  { lat: 23.174503, lng: -102.88579 },
  { lat: 24.015534, lng: -104.632178 },
  { lat: 29.39307, lng: -98.486508 },
  { lat: 36.144868, lng: -86.789623 },
  { lat: 45.779767, lng: -108.512527 },
  { lat: 53.526771, lng: -113.482153 },
  { lat: 45.518578, lng: -73.619123 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.773713, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: 21.179025, lng: -101.668463 },
  { lat: 21.166779, lng: -101.679278 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438112 },
  { lat: -43.999792, lng: 170.463352 }
];

var coordenadas = {
  lat: 29.39307,
  lng: -104.632178
};

initMap = () => {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadas,
    zoom: 3,
    mapTypeId: "terrain"
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var cuenta = 1;
  var marcadores = [];

  localidades.forEach(localidad => {
    let marcador = new google.maps.Marker({
      map: map,
      position: localidad,
      label: labels[cuenta % labels.length]
    });
    cuenta++;
    marcadores.push(marcador);
  });

  var markerCluster = new MarkerClusterer(map, marcadores, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    gridSize: 60,
    zoomOnClick: true,
    maxZoom: 10
  });

  document.getElementById("btnRoadMap").addEventListener("click", function() {
    map.setMapTypeId("terrain");
  });

  document.getElementById("btnSatellite").addEventListener("click", function() {
    map.setMapTypeId("satellite");
  });

  document.getElementById("btnHybrid").addEventListener("click", function() {
    map.setMapTypeId("hybrid");
  });

  document.getElementById("btnTerrain").addEventListener("click", function() {
    map.setMapTypeId("terrain");
  });
};
