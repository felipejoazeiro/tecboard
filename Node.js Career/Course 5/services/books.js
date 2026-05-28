const fs = require('fs');

function getBooks(req, res) {
    try {
        const books = JSON.parse(fs.readFileSync("book.json"));
        res.send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getBooks,
};
