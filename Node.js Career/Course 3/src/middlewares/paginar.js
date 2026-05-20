import RequisicaoIncorreta from "../errors/RequisicaoIncorreta";

async function paginar(req, res, next)  {
  try {
    let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query;
    
    let [campoOrdenacao, ordem] = ordenacao.split(":");
    
    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    const resultado = req.resultado;

    if (isNaN(limite) || isNaN(pagina) || isNaN(ordem) || limite <= 0 || pagina <= 0) {
      return res.status(400).json({ message: "Parâmetros de paginação inválidos" });
    }

    const livrosResultado = await resultado
      .sort({ [campoOrdenacao]: ordem })
      .limit(limite)
      .skip((pagina - 1) * limite)
      .exec();

    res.status(200).json(livrosResultado); 
  } catch (error) {
    next(new RequisicaoIncorreta("Erro ao processar a paginação: " + error.message));
  }
}

export default paginar;