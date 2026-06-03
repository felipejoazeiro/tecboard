import axios from "axios";

const favoritosAPI = axios.create({
  baseURL: "http://localhost:8000/favorites",
});

async function getAllFavorites() {
  const response = await favoritosAPI.get("/");
  return response.data;
}

async function insertFavorite(id) {
  await favoritosAPI.post("/", { id });
}

async function updateById(id, data) {
  await favoritosAPI.put(`/${id}`, data);
}

async function deleteById(id) {
  await favoritosAPI.delete(`/${id}`);
}

module.exports = {
  getAllFavorites,
  insertFavorite,
  updateById,
  deleteById,
};
