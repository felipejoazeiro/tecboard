const { Router } = require("express");
const {
  books,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controller/books");

const router = Router();

router.get("/", books);

router.post("/", createBook);

router.get("/:id", getBook);

router.put("/:id", updateBook);

router.patch("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
