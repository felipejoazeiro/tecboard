import { Book } from "../models/Book.js";

class BookController {
  static async getBooks(req, res) {
    try {
      const books = await Book.find({});
      return res.status(200).json(books);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async getBookById(req, res) {
    const bookId = req.params.id;
    try {
      const book = await Book.findOne({ id: bookId });
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.status(200).json(book);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async createBook(req, res) {
    const { title, author } = req.body;
    if (!title || !author) {
      return res.status(400).json({ message: "title and author are required" });
    }

    try {
      const last = await Book.findOne({}).sort({ id: -1 }).select("id").lean();
      const nextId = (last?.id ?? 0) + 1;
      await Book.create({ id: nextId, title, author });
      return res
        .status(201)
        .json({ message: "Book created", id: nextId, title, author });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default BookController;
