import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = "Loacir";
cliente1.cpf = 11122233344;

cliente2.nome = "João";
cliente2.cpf = 22211133344;

cliente3.nome = "Maria";
cliente3.cpf = 33311122244;

const contaCorrenteLoacir = new ContaCorrente();
contaCorrenteLoacir.agencia = 1001;

contaCorrenteLoacir.cliente = cliente1;

console.log(contaCorrenteLoacir);
contaCorrenteLoacir.depositar(120);
console.log(contaCorrenteLoacir);
const valorSacado = contaCorrenteLoacir.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteLoacir);
contaCorrenteLoacir.depositar(500);
console.log(contaCorrenteLoacir);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
console.log(conta2);

//console.log(cliente1);
//console.log(cliente2);
//console.log(cliente3);

contaCorrenteLoacir.transferir(200, conta2);
console.log(conta2);
console.log(contaCorrenteLoacir);
