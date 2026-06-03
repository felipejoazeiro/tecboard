const { getAllFavorites, insertFavorite, updateById, deleteById } = require("../services/favorites");

function allFavorites(req, res) {
  try {
    const favorites = getAllFavorites();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function createFavorite(req, res) {
  try {
    insertFavorite(req.body.id);
    res.status(201).send("Livro adicionado aos favoritos");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function updateFavorite(req, res) {
  try {
    updateById(req.body.id, req.body);
    res.status(200).send("Livro atualizado nos favoritos");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteFavorite(req, res) {
  try {
    deleteById(req.body.id);
    res.status(200).send("Livro removido dos favoritos");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  allFavorites,
  createFavorite,
  updateFavorite,
  deleteFavorite,
};
