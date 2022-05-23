const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({
    name: String,
    flavor: String,
    toppings: [String],
    numScoops: Number,
    whippedCreamCherry: Boolean
},{timestamps:true})

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae; //refers to the model, not the schema