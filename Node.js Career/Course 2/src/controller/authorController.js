import { author } from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const docs = await author.find({})
        .sort({ id: 1 })
        .select('-_id id name nationality')
        .lean();

      return res.status(200).json(docs);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async getAuthorById(req, res) {
    const authorId = parseInt(req.params.id);
    if (Number.isNaN(authorId)) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    try {
      const doc = await author.findOne({ id: authorId })
        .select('-_id id name nationality')
        .lean();
      if (!doc) {
        return res.status(404).json({ message: 'Author not found' });
      }
      return res.status(200).json(doc);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async createAuthor(req, res) {
    const { name, nationality } = req.body;
    if (!name || !nationality) {
      return res.status(400).json({ message: 'name and nationality are required' });
    }

    try {
      const last = await author.findOne({}).sort({ id: -1 }).select("id").lean();
      const nextId = (last?.id ?? 0) + 1;
      await author.create({ id: nextId, name, nationality });
      return res.status(201).json({ id: nextId, name, nationality });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async updateAuthor(req, res) {
    const authorId =req.params.id;

    const { name, nationality } = req.body;
    if (!name || !nationality) {
      return res.status(400).json({ message: 'name and nationality are required' });
    }

    try {
      const updated = await author.findOneAndUpdate(
        { id: authorId },
        { name, nationality },
        { new: true }
      )
        .select('-_id id name nationality')
        .lean();

      if (!updated) {
        return res.status(404).json({ message: 'Author not found' });
      }

      return res.status(200).json(updated);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async deleteAuthor(req, res) {
    const authorId = parseInt(req.params.id);
    if (Number.isNaN(authorId)) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    try {
      const result = await author.deleteOne({ id: authorId });
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Author not found' });
      }
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default AuthorController;
