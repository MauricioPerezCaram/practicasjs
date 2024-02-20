const usuarios = ["Mauricio", "Adolfo", "Perez", "Caram"];
console.log(usuarios);

const productos = [
  {
    nombre: "iPhone",
    precio: 999,
  },
  {
    nombre: "Mac",
    precio: 1499,
  },
  {
    nombre: "iPad",
    precio: 499,
  },
  {
    nombre: "Airpods",
    precio: 249,
  },
  {
    nombre: "Watch",
    precio: 399,
  },
];

console.log(productos[3]);

// VER TODOS LOS PRODUCTOS
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}

// AGREGAR UN PRODUCTO al final de UN ARRAY
productos.push({ nombre: "Aaaa", precio: 25 });
console.log(productos);

// AGREGAR UN PRODUCTO al principio de UN ARRAY
productos.unshift({ nombre: "Bbbb", precio: 25 });
console.log(productos);

// Borar UN PRODUCTO al principio de UN ARRAY
productos.shift();

// Borar UN PRODUCTO al Final de UN ARRAY
productos.pop();

console.log(productos);

productos.splice(3, 1);

console.log(productos.join(", "));

const productosyusuarios = productos.concat(usuarios);
console.log(productosyusuarios);

console.log(productosyusuarios.indexOf("Perez"));

if (productosyusuarios.includes("Perez")) {
  console.log("Esta Perez");
} else {
}
