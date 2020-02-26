var x = document.getElementById("mensaje");

function obtieneUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(muestraPosicion);
  } else {
    x.innerHTML = "El navegador no dispone la capacidad de geolocalización";
  }
}

function muestraPosicion(posicion) {
  var coordenadas =
    48.859113 /*posicion.coords.latitude*/ +
    "," +
    /*posicion.coords.longitude*/ 2.294181;
  var mapa = document.getElementById("mapa");
  var imagenurl =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    coordenadas +
    "&zoom=17&size=500x500&sensor=false&key=AIzaSyADjOfdGIg-7JiqjoTstMN9el4g-nLhxxA";
  mapa.src = imagenurl;
  mapa.style.visibility = "visible";
}
