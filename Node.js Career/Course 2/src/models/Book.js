import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId},
        title: { type: String, required: true },
        author: { type: String, required: true },
    },
    {
        versionKey: false,
        collection: 'livros',
    }
);

export const Book = mongoose.models.Livro || mongoose.model('Livro', bookSchema);
