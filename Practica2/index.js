var navegador = document.getElementById("navigator");
var datos = navegador.getElementsByTagName("li");

function getData() {
  datos[0].innerHTML = "Nombre del navegador es: " + navigator.appCodeName;
  datos[1].innerHTML = "La versión del navegador es: " + navigator.appVersion;
  datos[2].innerHTML = "Estatus de internet: " + navigator.onLine;
  datos[3].innerHTML = "Plataforma: " + navigator.platform;
  datos[4].innerHTML = "Geolocalización: " + navigator.geolocation;
  datos[5].innerHTML = "Lenguaje: " + navigator.language;
  datos[6].innerHTML = "Permisos: " + navigator.permissions;
  datos[7].innerHTML = "App version: " + navigator.appVersion;
  datos[8].innerHTML = "Credentials: " + navigator.credentials;
  datos[9].innerHTML = "Plugins: " + navigator.plugins;
  datos[10].innerHTML = "Cookies permitadas: " + navigator.cookieEnabled;
  datos[11].innerHTML = "No seguir: " + navigator.doNotTrack;
  datos[12].innerHTML = "Alamcenamiento: " + navigator.storage;
  datos[13].innerHTML = "Maximos Puntos de toque: " + navigator.maxTouchPoints;
  datos[14].innerHTML = "Vendor: " + navigator.vendor;
}
