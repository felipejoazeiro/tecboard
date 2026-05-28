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

module.exports = {
  getBooks,
  getBookById,
};
