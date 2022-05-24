const AuthorController = require ("../controllers/author.controller");

module.exports = app => {
    app.get("/api/test", AuthorController.testEndpoint);
    app.get("/api/authors/all", AuthorController.findAllAuthors);
    app.post("/api/authors/create", AuthorController.createAuthor);
    app.get("/api/authors/:_id", AuthorController.findOneAuthor);
    app.delete("/api/authors/:_id/delete", AuthorController.deleteOneAuthor);
    app.patch("/api/authors/:_id/update", AuthorController.updateOneAuthor);
}