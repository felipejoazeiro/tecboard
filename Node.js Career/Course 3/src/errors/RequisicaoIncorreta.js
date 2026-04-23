import ErroBase from "./ErroBase";

class RequisicaoIncorreta extends ErroBase {
  constructor(mensagem = "Requisição incorreta") {
    super(mensagem, 400);
  } 
}

export default RequisicaoIncorreta;