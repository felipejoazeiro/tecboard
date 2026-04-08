import express from 'express';
import mongoose from 'mongoose';
import { Book } from './models/Book.js';
import connectToDatabase from './config/dbConnect.js';

const app = express();

const connection = await connectToDatabase();

connection.on('error', (err) => {
    console.error('Database connection error:', err);
});

connection.once('open', () => {
    console.log('Database connected successfully');
});

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/mongo/ping', async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return res.status(503).json({ ok: false, message: 'MongoDB não conectado' });
        }

        await mongoose.connection.db.admin().command({ ping: 1 });
        return res.status(200).json({ ok: true });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
});

app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({})
        return res.status(200).json(books);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

app.get('/books/:id', async (req, res) => {
    const bookId = parseInt(req.params.id);
    if (Number.isNaN(bookId)) {
        return res.status(400).json({ message: 'Invalid id' });
    }

    try {
        const doc = await Book.findOne({ id: bookId })
            .select('-_id id title author')
            .lean();
        if (!doc) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json(doc);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

app.post('/books', async (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: 'title and author are required' });
    }

    try {
        const last = await Book.findOne({}).sort({ id: -1 }).select('id').lean();
        const nextId = (last?.id ?? 0) + 1;
        await Book.create({ id: nextId, title, author });
        return res.status(201).json({ id: nextId, title, author });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

app.put('/books/:id', async (req, res) => {
    const bookId = parseInt(req.params.id);
    if (Number.isNaN(bookId)) {
        return res.status(400).json({ message: 'Invalid id' });
    }

    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: 'title and author are required' });
    }

    try {
        const updated = await Book.findOneAndUpdate(
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
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

app.delete('/books/:id', async (req, res) => {
    const bookId = parseInt(req.params.id);
    if (Number.isNaN(bookId)) {
        return res.status(400).json({ message: 'Invalid id' });
    }

    try {
        const result = await Book.deleteOne({ id: bookId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(204).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

export default app;