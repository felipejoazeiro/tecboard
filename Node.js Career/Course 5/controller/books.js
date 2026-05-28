const fs = require("fs");

function getBooks(req, res) {
  try {
    const books = JSON.parse(fs.readFileSync("book.json"));
    res.send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function createBook(req, res) {
  res.send("Create a book");
}

function getBookById(req, res) {
  res.send(`Get book with id ${req.params.id}`);
}

function updateBook(req, res) {
  res.send(`Update book with id ${req.params.id}`);
}

function deleteBook(req, res) {
  res.send(`Delete book with id ${req.params.id}`);
}

module.exports = {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
