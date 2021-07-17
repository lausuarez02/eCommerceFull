const express = require("express");
const router = express.Router();

const {getAllProducts, getProductsById} = require("../controller/productController");

//Get all products from db
//Get /api/products
//access public

router.get("/", getAllProducts)

//Get all product by id from db
//Get /api/products/:id
//access public

router.get("/:id", getProductsById)

module.exports = router;