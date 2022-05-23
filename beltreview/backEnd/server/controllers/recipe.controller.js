const Recipe = require("../models/recipe.model");

module.exports.testEndpoint = (req,res) => {
    res.json({message: "hello from the recipe controller!"})
}


module.exports.findAllRecipes = (req,res) => {
    Recipe.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400))
}
