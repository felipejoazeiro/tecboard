const fs = require("fs");

function getAllFavorites() {
  return JSON.parse(fs.readFileSync("favorites.json", "utf-8"));
}

function insertFavorite(id) {
  const livros = JSON.parse(fs.readFileSync("book.json", "utf-8"));
  const favoritos = JSON.parse(fs.readFileSync("favorites.json", "utf-8"));

  const book = livros.find((livro) => livro.id === id);
  if (!book) {
    throw new Error("Livro não encontrado");
  }
  const isAlreadyFavorite = favoritos.some((fav) => fav.id === id);
  if (isAlreadyFavorite) {
    throw new Error("Livro já está nos favoritos");
  }

  const novaListaFavoritos = [...favoritos, book];
  fs.writeFileSync("favorites.json", JSON.stringify(novaListaFavoritos, null, 2));
}

function deleteById(id) {
  const favorites = getAllFavorites();
  const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
  fs.writeFileSync("favorites.json", JSON.stringify(updatedFavorites, null, 2));
}

function updateById(id, updatedData) {
  const favorites = getAllFavorites();
  const index = favorites.findIndex((favorite) => favorite.id === id);
  if (index !== -1) {
    favorites[index] = { ...favorites[index], ...updatedData };
    fs.writeFileSync("favorites.json", JSON.stringify(favorites, null, 2));
    return favorites[index];
  }
  return null;
}

module.exports = {
  getAllFavorites,
  insertFavorite,
  deleteById,
  updateById,
};
