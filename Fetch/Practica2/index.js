var paises = document.getElementById("country");

fetch("https://corona.lmao.ninja/countries")
  .then(function(response) {
    response.json().then(function(datos) {
      datos.forEach(registro => {
        console.log(registro);

        let renglon = document.createElement("div");
        renglon.className = "row border bg-light p-3 ml-2 text-center col-6";
        paises.appendChild(renglon);

        let columna = document.createElement("div");
        columna.className = "col-12";
        renglon.appendChild(columna);

        let nombre = document.createElement("p");
        nombre.textContent =
          "País: " + registro.country + ", casos: " + registro.cases;
        columna.appendChild(nombre);
      });
    });
  })
  .catch(function(error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });
