import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/livros",
});

const getLivros = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
};

export { getLivros };
