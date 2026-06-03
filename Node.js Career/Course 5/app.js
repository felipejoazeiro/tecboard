const express = require("express");
const favorites = require("./routes/favorites.js");
const books = require("./routes/book.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

const port = 8000;

app.use("/books", books);
app.use("/favorites", favorites);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
