const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/test", JokeController.testResponse);
    app.get("/api/jokes/all", JokeController.findAllJokes);
    app.post("/api/jokes/create", JokeController.createJoke);
    app.get("/api/jokes/:_id", JokeController.findOneJoke);
    app.delete("/api/jokes/:_id/delete", JokeController.deleteOneJoke);
    app.patch("/api/jokes/:_id/update", JokeController.updateOneJoke);
} 