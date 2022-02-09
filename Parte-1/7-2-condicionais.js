console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa Viagem");
  listaDeDestinos.splice(1, 1);
} else {
  console.log(
    "Comprador não é maior de idade ou não está acompanhada portanto não posso vender"
  );
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Você não pode embarcar");
}
