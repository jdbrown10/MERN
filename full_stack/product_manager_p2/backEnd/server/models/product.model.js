const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "product must have a title"]
    },
    price: {
        type: Number,
        required: [true, "product must have a price"]
    },
    description: {
        type: String,
        required: [true, "product must have a description"]
    }
},{timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; //refers to the model, not the schema