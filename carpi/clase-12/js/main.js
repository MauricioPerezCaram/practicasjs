let edad = 27;

// Es como un if pero mas simplificado
console.log(edad >= 18 ? "Podes ingresar" : "Eres menor");

// DESESCTRUCTURAR
// 1 TENEMOS UN OBJETO
const usuario = {
  nombre: "Mauricio",
  apellido: "Perez Caram",
};

// 2 DESECTRUCTURAMOS LO QUE QUEREMOS USAR DE MANERA GLOBAL DEL OBJETO
let { apellido } = usuario;

apellido = "Alfredo";

// 3 LO USAMOS YA DESESTRUCTURADO
console.log("Desestrucutrado es " + apellido);

console.log("Usuario.apellido es " + usuario.apellido);
