const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/recipes_may2022",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("connected to mongo db!"))
    .catch(err=>console.log("beep boop, db connection failed", err))