// Funcion declarada
function saludar() {
  console.log("Hola we");
}
saludar();

function apellido(apellido) {
  console.log("Hola Sr " + apellido);
}
apellido("Perez");
apellido();
apellido("Perez Caram");
// apellido(prompt("Ingresa tu apellido"));

function nombreYapellido(nombre, apellido) {
  console.log(nombre, apellido);
}
nombreYapellido("Mauricio", "Pérez");

// Funcion anonima
const saludar2 = function (nombre) {
  console.log("Saludar " + nombre);
};
saludar2("Maurinesa 2");

// Funcion flecha
const saludar3 = (curso) => {
  console.log("Esto usas en " + curso);
};
const saludar4 = (lineas) =>
  console.log("Esto es una funcion flecha en " + lineas + " linea");

saludar3("React Js");
saludar4(1);

// Funcion return (las funciones flecha tienen el return implicito)
function suma(a, b) {
  return a + b;
}
console.log(suma(15, 5));

const resta = (a, b) => {
  return a - b;
};
console.log(resta(1100, 5));

const resta2 = (a, b) => a - b;
console.log(resta2(5, 8));
