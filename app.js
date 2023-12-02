const d = document;

const inputRojo = d.getElementById("rojo");
const inputVerde = d.getElementById("verde");
const inputAzul = d.getElementById("azul");

const textoRojo = d.getElementById("texto-rojo");
const textoVerde = d.getElementById("texto-verde");
const textoAzul = d.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el texto de los parrafos

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;

  d.body.style.backgroundColor = colorRGB;
}

// Para actualizar RED

inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar GREEN

inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar BLUE

inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});

// El e.target se puede acambiar por el inputRojo/inputVerde/inputAzul
