console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 16;
const estaAcompanhada = true;
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1);
} else {
  //pessoa é menor de idade
  if (estaAcompanhada) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1);
  } else {
    console.log(
      "Comprador não é maior de idade e não está acompanhada portanto não posso vender"
    );
  }
}

//removendo item

console.log(listaDeDestinos);
