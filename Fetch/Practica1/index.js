var paises = document.getElementById("paises");

fetch("../data.json")
  .then(function(response) {
    response.json().then(function(datos) {
      datos.forEach(registro => {
        console.log(registro);
        let nombre = document.createElement("p");
        nombre.textContent =
          "País: " + registro.country + ", casos: " + registro.cases;
        paises.appendChild(nombre);
      });
    });
  })
  .catch(function(error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });
