const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHexDecimal() {
  let digitoAle = "0123456789ABCDEF";
  let coloreHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    coloreHex += digitoAle[indiceAleatorio];
  }
  return coloreHex;
}

boton.addEventListener("click", function () {
  let colorAlex = generarColorHexDecimal();
  color.textContent = colorAlex;
  document.body.style.backgroundColor = colorAlex;
});
