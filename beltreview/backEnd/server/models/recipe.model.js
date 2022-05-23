const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
    name:{
        name: String,
        required: true
    },
    measurement:{
        type: String,
        required: true
    }
})

const RecipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [5, "name must be at least 5 characters"]
    },
    minutes:{
        type: Number,
        required: true,
        min:[1, "must take at least 1 minute"]
    },
    servings:{
        type: Number,
        required: true,
        min:[1, "must serve at least 1"]
    },
    calories:{
        type: Number,
        min:[0, "can't have negative calories"]
    },
    category:{
        type: String,
        required: true
    },
    imgURL:{
        type: String,
        required: true
    },
    steps:{
        type:[String]
    },
    ingredients:{
        type:[IngredientSchema]
    }
},{timestamps:true})

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;