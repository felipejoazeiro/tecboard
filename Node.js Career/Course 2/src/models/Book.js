import mongoose from 'mongoose';
import {authorSchema} from './Author.js';

const bookSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId},
        title: { type: String, required: true },
        author: authorSchema,
    },
    {
        versionKey: false,
        collection: 'livros',
    }
);

export const book = mongoose.models.Livro || mongoose.model('Livro', bookSchema);
