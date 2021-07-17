const express = require("express");
const router = express.Router();

//Get all products from db
//Get /api/products
//access public

router.get("/", (req, res) => {

})

//Get all product by id from db
//Get /api/products/:id
//access public

router.get("/:id", (req, res) => {
    
})

module.exports = router;