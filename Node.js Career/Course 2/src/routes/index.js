import mongoose from 'mongoose';
import booksRoutes from './booksRoutes.js';

const routes = (app) => {
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

    app.use(booksRoutes);
};

export default routes;