import express from 'express';
import BookController from '../controller/bookController';

const routes = express.Router();

routes.get('/books', BookController.getBooks);
routes.get('/books/:id', BookController.getBookById);
routes.post('/books', BookController.createBook);

export default routes;