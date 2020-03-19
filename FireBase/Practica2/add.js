form.addEventListener("submit", e => {
  e.preventDefault();
  db.collection("GeoPractica1").add({
    Codigo: form.name.value,
    Productos: form.code.value
  });
  form.name.value = "";
  form.code.value = "";
});
