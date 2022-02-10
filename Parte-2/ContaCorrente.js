import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  //static para refletir em todas as instância
  //ou seja sempre que for chamado o metodo construtor
  //independente do objetor for diferente
  //mesmo assim ocorre um incremento
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia) {
    this.agencia = agencia;
    //nesse caso estamos pegando o acessor get cliente() e não atributo _cliente
    this.cliente = cliente;
    //aqui está usando a classe ContaCorrente e não o this
    //porque estamos usando um atributo static
    //que deve ser refletido em todas as instâncias
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      //console.log(this._saldo);
    }
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) return;
    //console.log(this._saldo);
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
