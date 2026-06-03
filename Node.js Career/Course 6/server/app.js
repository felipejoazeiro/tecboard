const express = require("express");
const books = require("./routes/book");
const favorites = require("./routes/favorites");

const app = express();
app.use(express.json());

const port = 8000;

app.use("/books", books);
app.use("/favorites", favorites);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
