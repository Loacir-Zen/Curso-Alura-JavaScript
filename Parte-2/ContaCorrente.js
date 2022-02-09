export class ContaCorrente {
  agencia;
  cliente;

  _saldo = 0;

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
