const express = require("express");
const app = express();
const port = 8000;

//request and response
//client sends a request; response is a variable used to send a response back to the client
app.get("/api/test", (req,res) => {
    //take in request, send out response
    console.log("hey it's the function here!")

    res.json({message:"hey i'm responding here."}); // this is like the return: only happens once. Make sure it's the last thing in the function and that it's sending over the proper data. 
})

app.get("/repeater/:word", (req, res) => {
    res.json({repeat: `your word was: ${req.params.word}`})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );