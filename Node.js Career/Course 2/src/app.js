import express from 'express';

const app = express();

const books = [
    { id: 1, title: 'Livro A', author: 'Autor A' },
    { id: 2, title: 'Livro B', author: 'Autor B' },
    { id: 3, title: 'Livro C', author: 'Autor C' }
];

function findBook(id){
    return books.findIndex(l => l.id === id);
}

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = findBook(bookId);
    if (bookIndex !== -1) {
        res.status(200).json(books[bookIndex]);
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = findBook(bookId);
    if (bookIndex !== -1) {
        const { title, author } = req.body;
        books[bookIndex] = { id: bookId, title, author };
        res.status(200).json(books[bookIndex]);
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = findBook(bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});

export default app;