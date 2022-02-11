import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia); // para chamar o construtor da classe pai
    ContaCorrente.numeroDeContas += 1;
  }

  /* teste() {
    super.teste();
    console.log("teste na classe conta corrente");
  }
  */

  //sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
