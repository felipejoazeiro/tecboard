import { book } from "../models/Book.js";

class BookController {
  static async getBooks(req, res) {
    try {
      const docs = await book.find({})
        .sort({ id: 1 })
        .select('-_id id title author')
        .lean();

      return res.status(200).json(docs);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async getBookById(req, res) {
    const bookId = parseInt(req.params.id);
    if (Number.isNaN(bookId)) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    try {
      const doc = await book.findOne({ id: bookId })
        .select('-_id id title author')
        .lean();
      if (!doc) {
        return res.status(404).json({ message: 'Book not found' });
      }
      return res.status(200).json(doc);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async createBook(req, res) {
    const { title, author } = req.body;
    if (!title || !author) {
      return res.status(400).json({ message: 'title and author are required' });
    }

    try {
      const last = await book.findOne({}).sort({ id: -1 }).select("id").lean();
      const nextId = (last?.id ?? 0) + 1;
      await book.create({ id: nextId, title, author });
      return res.status(201).json({ id: nextId, title, author });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async updateBook(req, res) {
    const bookId =req.params.id;

    const { title, author } = req.body;
    if (!title || !author) {
      return res.status(400).json({ message: 'title and author are required' });
    }

    try {
      const updated = await book.findOneAndUpdate(
        { id: bookId },
        { title, author },
        { new: true }
      )
        .select('-_id id title author')
        .lean();

      if (!updated) {
        return res.status(404).json({ message: 'Book not found' });
      }

      return res.status(200).json(updated);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async deleteBook(req, res) {
    const bookId = parseInt(req.params.id);
    if (Number.isNaN(bookId)) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    try {
      const result = await book.deleteOne({ id: bookId });
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Book not found' });
      }
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default BookController;
