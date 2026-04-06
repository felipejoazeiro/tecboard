import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Bem-vindo à página inicial!",
    '/livros': "Aqui estão os livros disponíveis.",
    '/autores': "Aqui estão os autores disponíveis.",
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url] || "Página não encontrada");
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});