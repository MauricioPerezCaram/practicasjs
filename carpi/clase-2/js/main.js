let edad = prompt("Ingresa la edad");

if (edad >= 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}

let numeroRandom = prompt("Ingresa un numero random");

if (numeroRandom != 10) {
  console.log("El numero random no es 10, es " + numeroRandom);
} else {
  console.log("Messi");
}

let hora = prompt("Ingresa la hora");

if (hora > 6 && hora < 21) {
  console.log("Es de día");
} else {
  console.log("Es de noche");
}

let nombreUsuario = prompt("Ingresa tu nombre");

if (nombreUsuario == "Mauri" || nombreUsuario == "Peca") {
  console.log("Caposaurio");
} else {
  console.log("Panchaso mal");
}
