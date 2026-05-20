# 2404-api-node-express

API REST em Node.js desenvolvida no curso da Alura para cadastro e consulta de livros e autores.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- nodemon

## Como executar

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Crie um arquivo `.env` com as variáveis usadas pela aplicação:

- `MONGODB_DB_NAME`
- `MONGODB_PASSWORD`
- `MONGODB_URI`
- `PORT` (opcional)

## Rotas principais

- `GET /` - mensagem de status da API
- `GET /livros` - lista livros com paginação
- `GET /livros/busca` - filtra livros
- `GET /livros/:id` - busca um livro por ID
- `POST /livros` - cadastra um livro
- `PUT /livros/:id` - atualiza um livro
- `DELETE /livros/:id` - remove um livro
- `GET /autores` - lista autores com paginação
- `GET /autores/:id` - busca um autor por ID
- `POST /autores` - cadastra um autor
- `PUT /autores/:id` - atualiza um autor
- `DELETE /autores/:id` - remove um autor
