let botonSig = document.getElementById("boton-cambiar-cita");
let citasElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCitas() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citasElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCitas();

botonSig.addEventListener('click',cambiarCitas);
