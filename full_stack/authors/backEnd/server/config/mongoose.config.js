const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authors_may2022",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Connected to mongo db!"))
    .catch(err=>console.log("Connection failed", err))