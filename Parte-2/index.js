import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Loacir", 11122233344);
const cliente2 = new Cliente("João", 22211133344);
const cliente3 = new Cliente("Maria", 33311122244);

//
//cliente1.nome = "Loacir";
//cliente1.cpf = 11122233344;

//cliente2.nome = "João";
//cliente2.cpf = 22211133344;

//cliente3.nome = "Maria";
//cliente3.cpf = 33311122244;

const contaCorrenteLoacir = new ContaCorrente(cliente1, 1001);

//não precisa mais pois criamos os contrutores
//contaCorrenteLoacir.agencia = 1001;
//contaCorrenteLoacir.cliente = cliente1;

console.log(contaCorrenteLoacir);
contaCorrenteLoacir.depositar(120);
console.log(contaCorrenteLoacir);
const valorSacado = contaCorrenteLoacir.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteLoacir);
contaCorrenteLoacir.depositar(500);
console.log(contaCorrenteLoacir);

const conta2 = new ContaCorrente(cliente2, 102);
//acesso para proteção (get e set ele não é um método ele é uma acessor)
//o acessor sempre vai ser público
//conta2.cliente = 0; vai retornar undefined porque set cliente(novoValor) temos um instanceof para Cliente
//o que obriga nos passarmos um objeto como deveria ser
//isso obriga que quando atribuimos um valor para uma um objeto ele dever do tipo cliente

//conta2.agencia = 102;
//conta2.cliente = cliente2;

let valor = 200;
contaCorrenteLoacir.transferir(valor, conta2);
console.log(conta2.cliente);
console.log(contaCorrenteLoacir);

//console.log(conta2.numeroDeContas);
//para acessar o atributo static da contaCorrente
console.log(ContaCorrente.numeroDeContas);
