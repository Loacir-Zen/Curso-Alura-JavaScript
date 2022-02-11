import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente01 = new Cliente("Loacir", 11122233344);

const conta01 = new ContaCorrente(cliente01, 1001);
conta01.depositar(500);
conta01.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente01, 1001);

console.log(contaPoupanca);
console.log(conta01);

contaPoupanca.sacar(10);

//conta01.teste();
console.log(contaPoupanca);
console.log(conta01);
