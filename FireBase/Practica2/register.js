class Register {
  constructor(id, name, code) {
    this.id = id;
    this.Name = name;
    this.Code = code;
  }

  erase(id) {
    db.collection("GeoPractica1")
      .doc(id)
      .delete();
  }

  add() {
    db.collection("productos").add({
      nombre: this.nombre,
      codigo: this.codigo
    });
  }

  edit(id) {
    formularioeditar.nombreeditar.value = this.nombre;
    formularioeditar.codigoeditar.value = this.codigo;
    formularioeditar.ideditar.value = this.id;
  }

  update(id, edited2, edited1) {
    db.collection("GeoPractica1")
      .doc(id)
      .update({ Codigo: edited2.value, Productos: edited1.value });
  }
}
