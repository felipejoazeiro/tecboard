const express = require("express");
const books = require("./books");

const app = express();

const port = 8000;

app.use("/books", books);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
