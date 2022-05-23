const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/test", ProductController.testResponse);
    app.get("/api/products/all", ProductController.findAllProducts);
    app.post("/api/products/create", ProductController.createProduct);
    app.get("/api/products/:_id", ProductController.findOneProduct);
    app.delete("/api/products/:_id/delete", ProductController.deleteOneProduct);
    app.patch("/api/products/:_id/update", ProductController.updateOneProduct);
} 