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
  let edit = document.createElement("button");
  let br = document.createElement("br");

  li.className += " " + "d-flex";
  name.textContent = doc.data().Productos + " ";
  code.textContent = doc.data().Codigo + " ";
  erase.innerHTML = "<i class='material-icons'> delete</i>";
  edit.innerHTML = "<i class='material-icons'>edit</i>";

  code.className += " " + "mr-auto p-2";
  li.className += " " + "p-2";
  erase.className += " " + "m-2 btn btn-danger";
  edit.className += " " + "m-2 btn btn-warning";

  li.setAttribute("id", doc.id);
  name.setAttribute("id", doc.id + "name");
  code.setAttribute("id", doc.id + "code");
  edit.setAttribute("id", doc.id + "edit");
  li.appendChild(name);
  li.appendChild(code);
  li.appendChild(erase);
  li.appendChild(edit);
  producList.appendChild(li);
  edit.addEventListener("click", e => {
    let id = e.target.parentElement.getAttribute("id");
    if (
      id == null ||
      id.slice(this.length - 4) == "name" ||
      id.slice(this.length - 4) == "code" ||
      id.slice(this.length - 4) == "edit"
    )
      id = e.target.parentElement.parentElement.getAttribute("id");
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let btnConfirm = document.createElement("button");
    let span1 = document.getElementById(id + "name");
    let span2 = document.getElementById(id + "code");
    let edit = document.getElementById(id + "edit");
    btnConfirm.className += " " + "m-2 btn btn-success";
    btnConfirm.innerHTML = "<i class='material-icons'>done</i>";
    btnConfirm.setAttribute("id", id + "conf");
    input1.setAttribute("id", id + "edit1");
    input2.setAttribute("id", id + "edit2");

    input1.type = "number";
    input2.type = "type";
    input1.value = parseInt(span1.innerHTML);
    input2.value = span2.innerHTML;
    document.getElementById(id).replaceChild(btnConfirm, edit);
    document.getElementById(id).replaceChild(input1, span1);
    document.getElementById(id).replaceChild(input2, span2);

    btnConfirm.addEventListener("click", e => {
      let id = e.target.parentElement.getAttribute("id");
      if (id == null || id.slice(this.length - 4) == "conf")
        id = e.target.parentElement.parentElement.getAttribute("id");
      let edited1 = document.getElementById(id + "edit1");
      let edited2 = document.getElementById(id + "edit2");
      db.collection("GeoPractica1")
        .doc(id)
        .update({ Codigo: edited2.value, Productos: edited1.value });
    });
  });
  erase.addEventListener("click", e => {
    let id = e.target.parentElement.getAttribute("id");
    if (id == null)
      id = e.target.parentElement.parentElement.getAttribute("id");
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
    if (change.type == "modified") {
      let valorid = document.getElementById(change.doc.id);
      producList.removeChild(valorid);
      renderProducts(change.doc, cycle);
      cycle++;
    }
  });
});
