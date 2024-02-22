const alerta = document.querySelector("#alerta");

alerta.addEventListener("click", mostrarAlerta);
function mostrarAlerta() {
  alert("Boton alerta");
}

consola.addEventListener("click", mensajeConsola);
function mensajeConsola() {
  console.log("msj consola");
}

// Darkmode

const colorMode = document.querySelector("#color-mode");
const body = document.body;

colorMode.addEventListener("click", cambiarFondo);

function cambiarFondo() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    colorMode.innerText = "Cambiar a modo claro";
  } else {
    colorMode.innerText = "Cambiar a modo oscuro";
  }
}

const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(alertaInput.value);
  alertaForm.reset();
});

// AGREGAR ITEMS A UNA LISTA
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar");

agregarForm.addEventListener("submit", agregarItems);

function agregarItems(e) {
  e.preventDefault();
  if (agregarInput.value != "") {
    let item = document.createElement("li");
    item.innerText = agregarInput.value;
    agregar.append(item);
  }
  agregarInput.focus();
  agregarForm.reset();
}
