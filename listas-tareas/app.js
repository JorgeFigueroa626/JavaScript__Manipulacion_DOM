const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaTareas = document.getElementById("lista-de-tarea");

function agregarTarea() {
  if (input.value) {
    //crea tarea
    let tareaNeva = document.createElement("div");
    tareaNeva.classList.add("tarea");

    //texto ingreaso por usuario
    let texto = document.createElement("p");
    texto.innerText = input.value;
    tareaNeva.appendChild(texto);

    //crear y agregar contenedor de iconos
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNeva.appendChild(iconos);

    //iconos
    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    completar.addEventListener("click", completarTarea);

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminado");
    eliminar.addEventListener("click", eliminarTarea);

    iconos.append(completar, eliminar);

    //agregar tarea a la lista
    listaTareas.appendChild(tareaNeva);
  } else {
    alert("Por favor ingresar una tarea");
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle("completada");
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener("click", agregarTarea);

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    agregarTarea();
  }
});
