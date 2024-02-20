// OBJETO
const usuario1 = {
  nombre: "Mauricio",
  apellido: "Perez Caram",
  edad: 27,
  nacionalidad: "Argentina",
  hobbies: {
    hobbie1: "Futbol",
    hobbie2: "Paddle",
  },
};

console.log(usuario1);
console.log(usuario1.nombre);
console.log(usuario1.hobbies.hobbie2);

usuario1.nombre = "Adolfo";
console.log(usuario1);

// OBJETO CONSTRUCTOR
function Producto(titulo, precio, stock) {
  this.titulo = titulo;
  this.precio = precio;
  this.stock = stock;
}

const producto1 = new Producto("iPhone", 999, 20);
const producto2 = new Producto("Mac", 1499, 15);

console.log(producto1, producto2);
// el this se pone porque no sabemos como se va a llamar el objeto que estamos creando, pero si sabemos que esta relacionado a ese constructor

// CLASES (es lo mismo que objeto constructor)
class Product {
  constructor(titulo, precio, stock) {
    this.titulo = titulo;
    this.precio = precio;
    this.stock = stock;
  }
}

const producto3 = new Product("Airpods", 249, 9);
console.log(producto3);

// METODOS
class Persona {
  constructor(nombre, edad, nacionalidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.saludar = function () {
      console.log("Hola, soy " + this.nombre);
    };
    this.cumpleanos = function () {
      this.edad++;
    };
  }
}

const persona1 = new Persona("Mauriciano", 27, "Argentino Papy");
console.log(persona1);

persona1.cumpleanos();
console.log(persona1);
persona1.saludar();

console.log("nombre" in persona1);
if ("nombre" in persona1) {
  console.log("Existe el this nombre en el objeto constructor");
} else {
  console.log("No existe nombre en el objeto constructor");
}

for (propiedad in persona1) {
  console.log(propiedad);
}
