const express = require("express");
const router = express.Router();
const {
    getAllProducts,
  getProductById,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;