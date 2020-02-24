var x = document.getElementById("mensaje");

function obtieneUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(muestraPosicion);
  } else {
    x.innerHTML = "El navegador no dispone la capacidad de geolocalización";
  }
}

function muestraPosicion(posicion) {
  var coordenadas = posicion.coords.latitude + "," + posicion.coords.longitude;

  var imagenurl =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    coordenadas +
    "&zoom=17&size=400x300&sensor=false&key=AIzaSyADjOfdGIg-7JiqjoTstMN9el4g-nLhxxA";

  document.getElementById("mapa").innerHTML = "<img src='" + imagenurl + "'>";
}
