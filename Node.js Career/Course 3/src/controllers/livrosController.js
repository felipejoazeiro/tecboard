import {livros, autores} from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find()
        .populate("autor")
        .exec();

      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id)
        .populate("autor", "nome")
        .exec();

      res.status(200).send(livroResultados);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Livro atualizado com sucesso"});
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndDelete(id);

      res.status(200).send({message: "Livro removido com sucesso"});
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;

      const livrosResultado = await livros.find({"editora": editora});

      res.status(200).send(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livroResultado = await livros.find(busca).populate("autor");

        res.status(200).send(livroResultado);
      }else{
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }

  };

}
async function processaBusca(params){
  const {editora, titulo, minPages, maxPages, nomeAutor} = params;

  const busca = {};

  if (editora) busca.editora = editora;
  if (titulo) busca.titulo = {$regex: new RegExp(titulo, "i")};
  if (minPages) busca.numeroPaginas = {$gte: minPages};
  if (maxPages) busca.numeroPaginas = {...busca.numeroPaginas, $lte: maxPages};
  if (nomeAutor){
    const autor = await autores.findOne({nome: nomeAutor});
    const autorId = autor._id;
    busca.autor = autorId;
  }

  return busca;
}
export default LivroController;
