console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(" \n Destinos Possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let destinoExiste = false;

let contador = 0;

for (let cont = 0; cont < listaDeDestinos.length; cont++) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  } else {
    destinoExiste = false;
  }
}

console.log("Destino existe", destinoExiste);

if (destinoExiste && podeComprar) {
  console.log("Boa Viagem");
} else {
  console.log("Desculpa tivemos um erro!");
}
