// setTimeout(() => {
//   console.log("Este msj tarda 3 seg en aparecer");
// }, 3000);

const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res === true ? resolve("Promesa resuelta") : resolve("Promesa rechazada");
    }, 1500);
  });
};

const valor = false;

eventoFuturo(valor)
  .then((res) => console.log(res))
  .catch((res) => {
    console.log(res);
  });
