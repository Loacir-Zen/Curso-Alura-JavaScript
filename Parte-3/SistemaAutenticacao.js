/*
Ser autenticavel significa ter um método autenticar

*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  static ehAutenticavel(autenticavel) {
    //verifica se a chave autenticar existen dentro do bojeto autenticavel
    //depois verificar se autenticavel.autenticar é do tipo de uma função
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
