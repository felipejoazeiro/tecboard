import {
  getBooks,
  getBookById,
  createBookService,
  updateBookService,
  deleteBookService,
} from "../services/books";

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
  try {
    updateBookService(req, res);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    deleteBookService(req, res);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  books,
  createBook,
  getBook,
  updateBook,
  deleteBook,
};
