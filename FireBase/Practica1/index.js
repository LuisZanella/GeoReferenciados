// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKBrTl9dx9Ihlew1rQYRVW9-ibncuhzVg",
  authDomain: "georeferenciados-268000.firebaseapp.com",
  databaseURL: "https://georeferenciados-268000.firebaseio.com",
  projectId: "georeferenciados-268000",
  storageBucket: "georeferenciados-268000.appspot.com",
  messagingSenderId: "458764580632",
  appId: "1:458764580632:web:4dca2c415b17c7f1f3106d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.querySelector("#form");
const producList = document.querySelector("#list");
form.addEventListener("submit", e => {
  e.preventDefault();
  db.collection("GeoPractica1").add({
    Codigo: form.name.value,
    Productos: form.code.value
  });
  form.name.value = "";
  form.code.value = "";
});
function renderProducts(doc, cycle) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let code = document.createElement("span");
  let erase = document.createElement("button");
  let br = document.createElement("br");

  li.className += " " + "d-flex";
  name.textContent = doc.data().Productos + " ";
  code.textContent = doc.data().Codigo + " ";
  erase.innerHTML = "<i class='material-icons'> delete</i>";

  code.className += " " + "mr-auto p-2";
  li.className += " " + "p-2";
  erase.className += " " + "btn btn-danger";

  li.setAttribute("id", doc.id);
  li.appendChild(name);
  li.appendChild(code);
  li.appendChild(erase);
  producList.appendChild(li);

  erase.addEventListener("click", e => {
    let id = e.target.parentElement.getAttribute("id");
    console.log(id);
    db.collection("GeoPractica1")
      .doc(id)
      .delete();
  });
}
/*
    db.collection('GeoPractica1').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderProducts(doc);
        });

    });*/
db.collection("GeoPractica1").onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  let cycle = 0;
  changes.forEach(change => {
    if (change.type == "added") {
      renderProducts(change.doc, cycle);
      cycle++;
    }
    if (change.type == "removed") {
      console.log(change.doc.id);
      let valorid = document.getElementById(change.doc.id);
      producList.removeChild(valorid);
    }
  });
});
