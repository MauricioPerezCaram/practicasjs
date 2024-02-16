let i = 1;

while (i <= 10) {
  console.log("While " + i);
  i++;
}

for (let x = 1; x <= 10; x++) {
  console.log("For " + x);
}

let m = 1;
do {
  console.log("Do while " + m);
  m++;
} while (m < 10);

for (let a = 1; a < 5; a++) {
  console.log("For principaaaaaaal " + a);

  for (let b = 1; b < 5; b++) {
    console.log("For secundario " + b);
  }
}

let diaDeLaSemana = Number(prompt("Ingresa del 1 al 7 el día de la semana"));
switch (diaDeLaSemana) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("1 al 7 pescado");
    break;
}
