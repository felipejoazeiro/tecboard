import express from 'express';

import { Book } from '../models/Book.js';

const routes = (app) => {

    app.route("/").get((req, res) => {
        res.status(200).send("Hello World!");
    });

    app.route("/mongo/ping").get(async (req, res) => {
        try {
            await Book.db.admin().ping();
            return res.status(200).json({ ok: true });
        }
        catch (err) {
            return res.status(500).json({ ok: false, error: err.message });
        }
    });

    app.use(express.json(), Book)

}

export default routes;