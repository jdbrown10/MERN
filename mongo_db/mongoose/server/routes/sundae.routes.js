const SundaeController = require("../controllers/sundae.controller");

module.exports = app => {
    app.get("/api/test", SundaeController.testResponse);
    app.get("/api/sundaes/all", SundaeController.findAllSundaes);
    app.post("/api/sundaes/create", SundaeController.createSundae);
    app.get("/api/sundaes/:_id", SundaeController.findOneSundae);
    app.delete("/api/sundaes/:_id/delete", SundaeController.deleteOneSundae);
    app.patch("/api/sundaes/:_id/update", SundaeController.updateOneSundae);
} 