import 'dotenv/config';
import mongoose from 'mongoose';
import app from './src/app.js';
import connectToDatabase from './src/config/dbConnect.js';
import { Book } from './src/models/Book.js';

const PORT = 3000;

async function start() {
    await connectToDatabase();
    await Book.init();

    

    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });

    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        process.exit(0);
    });
}

start().catch((err) => {
    console.error('Falha ao iniciar o servidor:', err);
    process.exit(1);
});