import mongoose from "mongoose";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta";
import ErrorValidacao from "../errors/ErroValidacao";
import NaoEncontrado from "../errors/NaoEncontrado";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErrorValidacao(erro).enviarResposta(res);
  } else if (erro instanceof NaoEncontrado) {
    erro.enviarResposta(res);
  } else {
    res.status(500).send({ message: "Erro interno no servidor" });
  }
}

export default manipuladorDeErros;
