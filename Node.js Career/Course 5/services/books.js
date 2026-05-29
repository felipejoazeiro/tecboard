const fs = require("fs");

function hasValidName(name) {
  return typeof name === "string" && name.trim().length > 0;
}

function getBooks(req, res) {
  try {
    const books = JSON.parse(fs.readFileSync("book.json"));
    res.send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getBookById(req, res) {
  try {
    const books = JSON.parse(fs.readFileSync("book.json"));
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.send(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function createBookService(req, res) {
  try {
    if (!hasValidName(req.body.nome)) {
      return res.status(422).send("Nome do livro é obrigatório");
    }

    const books = JSON.parse(fs.readFileSync("book.json"));
    const newBookId = checkLastId() + 1;

    const newBook = {
      id: newBookId,
      nome: req.body.nome,
    };
    books.push(newBook);
    fs.writeFileSync("book.json", JSON.stringify(books));
    res.status(201).send(newBook);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function updateBookService(req, res) {
  try {
    const books = JSON.parse(fs.readFileSync("book.json"));
    const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (bookIndex === -1) {
      return res.status(404).send("Book not found");
    }

    if (req.body.nome !== undefined && !hasValidName(req.body.nome)) {
      return res.status(422).send("Nome do livro é obrigatório");
    }

    const updatedBook = {
      id: books[bookIndex].id,
      nome: req.body.nome || books[bookIndex].nome,
    };
    books[bookIndex] = updatedBook;
    fs.writeFileSync("book.json", JSON.stringify(books));
    res.send(updatedBook);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteBookService(req, res) {
  try {
    const books = JSON.parse(fs.readFileSync("book.json"));
    const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (bookIndex === -1) {
      return res.status(404).send("Book not found");
    }
    books.splice(bookIndex, 1);
    fs.writeFileSync("book.json", JSON.stringify(books));
    res.send(`Book with id ${req.params.id} deleted`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function checkLastId() {
  const books = JSON.parse(fs.readFileSync("book.json"));
  const lastId = books.length > 0 ? books[books.length - 1].id : 0;
  return lastId;
}

module.exports = {
  getBooks,
  getBookById,
  createBookService,
  updateBookService,
  deleteBookService,
};
