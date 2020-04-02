var coordenadas = {
  lat: -31.56391,
  lng: 147.154312
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idioma = urlParams.get("idioma");
document.getElementById("idioma").value = idioma;

var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDToYkjq7Lp8jc5sRgK2i_7U3t1yZwvlQg&callback=initMap&language=" +
  idioma;
document.head.appendChild(script);

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadas,
    zoom: 3
  });
}
