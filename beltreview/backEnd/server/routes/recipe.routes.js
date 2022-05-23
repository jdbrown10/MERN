const RecipeController = require("../controllers/recipe.controller");

module.exports = app => {
    app.get("/api/test", RecipeController.testEndpoint);
    app.get("/api/recipe/all", RecipeController.findAllRecipes);
    app.post("/api/recipe/create", RecipeController.createRecipe);
    app.get("/api/recipe/:_id", RecipeController.findOneRecipe);
    app.delete("/api/recipe/:_id/delete", RecipeController.deleteOneRecipe);
    app.patch("/api/recipe/:_id/update", RecipeController.updateOneRecipe);
}
