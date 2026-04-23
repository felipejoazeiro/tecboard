import RequisicaoIncorreta from "./RequisicaoIncorreta";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagemErro = Object.values(erro.erros).map(erro => erro.mensagem).join(", ");
    super(`Os seguintes erros de validação ocorreram: ${mensagemErro}`);
  }
}
export default ErroValidacao;