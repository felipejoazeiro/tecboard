import { getBooks, getBookById, createBookService } from "../services/books";

function books(req, res) {
  try {
    getBooks(req, res);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function createBook(req, res) {
  try {
    createBookService(req, res);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getBook(req, res) {
  try {
    getBookById(req, res);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function updateBook(req, res) {
  res.send(`Update book with id ${req.params.id}`);
}

function deleteBook(req, res) {
  res.send(`Delete book with id ${req.params.id}`);
}

module.exports = {
  books,
  createBook,
  getBook,
  updateBook,
  deleteBook,
};
