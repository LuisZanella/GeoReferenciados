// var coordinates = new google.maps.LatLng(0, 0);
var map;
var coordinates = {
  center: { lat: 0, lng: 0 },
  zoom: 20
};
var ubication = {};
// Your web app's Firebase configuration
var login = false;
var firebaseConfig = {
  apiKey: "AIzaSyDKBrTl9dx9Ihlew1rQYRVW9-ibncuhzVg",
  authDomain: "georeferenciados-268000.firebaseapp.com",
  databaseURL: "https://georeferenciados-268000.firebaseio.com",
  projectId: "georeferenciados-268000",
  storageBucket: "georeferenciados-268000.appspot.com",
  messagingSenderId: "458764580632",
  appId: "1:458764580632:web:4dca2c415b17c7f1f3106d"
};
let userName = "";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection("GeoPractica1")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      renderLocations(doc);
    });
  });

register = () => {
  login = true;
  this.userName = document.getElementById("name").value;
};

renderLocations = (doc, cycle) => {
  const tableRef = document
    .getElementById("tableSpy")
    .getElementsByTagName("tbody")[0];
  const newRow = tableRef.insertRow();
  const nameCell = newRow.insertCell(0);
  const latitudCell = newRow.insertCell(1);
  const longitudeCell = newRow.insertCell(2);
  const userName = document.createTextNode(doc.data().Name);
  const latitudeUser = document.createTextNode(doc.data().Latitude);
  const longitudeUser = document.createTextNode(doc.data().Longitude);
  nameCell.appendChild(userName);
  latitudCell.appendChild(latitudeUser);
  longitudeCell.appendChild(longitudeUser);
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), coordinates);
  var icon = {
    url:
      "https://pngimage.net/wp-content/uploads/2018/06/we-are-here-png-2.png",
    scaledSize: new google.maps.Size(100, 100),
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
      if (!login) {
        return;
      }
      document.getElementById("canvas").removeAttribute("visibility");
      addPosition();
      movePosition(marker);
    }, 3000);
  }
}
addPosition = () => {
  alert(this.userName);
  navigator.geolocation.getCurrentPosition(position => {
    db.collection("Spy").add({
      Latitude: position.coords.latitude,
      Longitude: position.coords.longitude,
      Name: this.userName
    });
  });
};

movePosition = marker => {
  navigator.geolocation.getCurrentPosition(position => {
    let location = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    marker.setPosition(location);
    map.panTo(location);
    map.setCenter(location);
  });
};
