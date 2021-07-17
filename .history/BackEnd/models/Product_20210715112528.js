const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    countInStock: {
        type: Number,
        required : true
    },
    imageUri: {
        type: String,
        required: true
    }
})


const Product = mongoose.model("product", productSchema);

module.exports = Product