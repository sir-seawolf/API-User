var contenido = document.querySelector('#contenido');
function mostrarMujeres() {
    fetch('https://randomuser.me/api/?gender=female&&results=5')
    .then(r => r.json())
    .then(data => {
        (data.results[0])
            contenido.innerHTML = `
            <img src="${data.results["0"].picture.large}">
            <p>Nombre: ${
              data.results["0"].name.title +
              " " +
              data.results["0"].name.first +
              " " +
              data.results["0"].name.last +
              " " +
              data.results["0"].email +
              "  <br>" +
              data.results["0"].location.coordinates.latitude +
              " " +
              data.results["0"].location.coordinates.longitude +
              "  <br>"
            }</p>
            `;
    });
}
