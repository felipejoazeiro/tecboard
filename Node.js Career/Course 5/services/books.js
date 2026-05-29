const fs = require("fs");

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
    try{
        const books = JSON.parse(fs.readFileSync("book.json"));
        const newBookId = checkLastId() + 1;

        const newBook = {
            id: newBookId,
            nome: req.body.nome
        };
        books.push(newBook);
        fs.writeFileSync("book.json", JSON.stringify(books));
        res.status(201).send(newBook);
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
};
