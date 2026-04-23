import ErrorBase from "./ErrorBase.js";

class NaoEncontrado extends ErrorBase {
  constructor(mensagem = "Recurso não encontrado") {
    super(mensagem, 404);
  }
}
export default NaoEncontrado;
