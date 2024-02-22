// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   total += i;
//   console.log(total);
// }

// function sumarRango(min, max) {
//   let total = 0;
//   for (let index = min; index <= max; index++) {
//     total += index;
//   }
//   return total;
// }

// console.log(sumarRango(1, 10));
// console.log(sumarRango(3, 7));
// console.log(sumarRango(13, 43));

const numeros = [50, 26, 96, 85, 47, 25, 36];
const animales = ["Perro", "Gato", "Caballo", "Camello", "Ballena"];
const productos = [
  { nombre: "telefono", precio: 999 },
  { nombre: "computadora", precio: 1499 },
  { nombre: "computadora mansa", precio: 1499 },
  { nombre: "tablet", precio: 499 },
  { nombre: "auriculares", precio: 249 },
  { nombre: "reloj", precio: 399 },
];

// numeros.forEach((numero) => {
//   console.log(numero);
// });

// productos.forEach((producto) => {
//   console.log(producto);
//   console.log(producto.nombre);
//   console.log(producto.precio);
// });

// const perro = animales.find((animal) => {
//   return animal === "Perro";
// });
// console.log(perro);

// const productoElegido = prompt("Busca un producto");

// console.log(
//   productos.find((producto) => {
//     return producto.nombre === productoElegido;
//   })
// );

// const computadoras = productos.filter((producto) => {
//   return producto.nombre.includes("computadora");
// });
// console.log(computadoras);

// const cisne = animales.some((animal) => {
//   return animal === "cisne";
// });
// console.log(cisne);

// const productosmapeados = productos.map((producto) => {
//   return {
//     nombre: producto.nombre,
//     precio: producto.precio * 0.9,
//   };
// });
// console.log(productos);
// console.log(productosmapeados);

// const totalCarrito = productos.reduce(
//   (acumulador, producto) => acumulador + producto.precio,
//   0
// );
// console.log(totalCarrito);

console.log(numeros);
numeros.sort((a, b) => {
  return a - b;
});
console.log(numeros);
