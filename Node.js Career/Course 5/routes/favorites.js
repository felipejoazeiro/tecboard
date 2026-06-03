const { Router } = require("express");
const {
  allFavorites,
  createFavorite,
  updateFavorite,
  deleteFavorite,
} = require("../controller/favorite");

const router = Router();

router.get("/", allFavorites);

router.post("/", createFavorite);

router.put("/:id", updateFavorite);

router.patch("/:id", updateFavorite);

router.delete("/:id", deleteFavorite);

module.exports = router;
