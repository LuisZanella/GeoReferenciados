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
