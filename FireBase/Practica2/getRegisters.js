function renderProducts(doc, cycle) {
  var register = new Register(doc.id, doc.data().Productos, doc.data().Codigo);
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
      register.update(id, edited2, edited1);
    });
  });
  erase.addEventListener("click", e => {
    let id = e.target.parentElement.getAttribute("id");
    if (id == null)
      id = e.target.parentElement.parentElement.getAttribute("id");
    register.erase(id);
  });
}
