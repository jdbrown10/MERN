const express = require("express");
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({extended:true})) //add this to any project that uses post requests

app.get("/api/test", (req,res)=>{
    res.json({message: "hey it's the test right here"})
})

app.post("/api/post/repeat", (req, res)=>{
    console.log(req.body);
    res.json({message:"received"});
})

app.listen(port, ()=>console.log(`currently running on port ${port}`));

