const { Router } = require("express");
const {
  books,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = Router();

router.get("/", Books);

router.post("/", createBook);

router.get("/:id", getBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
