const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("mongo db connection successful!"))
    .catch(err=>console.log("mongo db connection failed!"))