import mongoose from 'mongoose';

function buildMongoUri() {
    let uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error(
            'MONGODB_URI não definido. Verifique seu arquivo .env e o diretório em que o servidor foi iniciado.'
        );
    }

    const password = process.env.MONGODB_PASSWORD;
    if (password && uri.includes('<db_password>')) {
        uri = uri.replace('<db_password>', encodeURIComponent(password));
    }

    return uri;
}

export default async function connectToDatabase() {
    const uri = buildMongoUri();
    const dbName = process.env.MONGODB_DB_NAME;

    try {
        await mongoose.connect(uri, {
            dbName: dbName || undefined,
            serverSelectionTimeoutMS: 8000,
        });

        return mongoose.connection;
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}