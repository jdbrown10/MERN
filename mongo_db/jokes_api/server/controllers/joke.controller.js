const Joke = require("../models/joke.model")


module.exports.findAllJokes = (req,res) => {
    Joke.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"Whoops! That didn't work", err}))
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params._id}) 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"Whoops! That didn't work", err}))
}

module.exports.findRandomJoke = (req,res) => {
    Joke.findOne() 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"Whoops! That didn't work", err}))
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body) //this will be for all the post requests
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"Whoops! That didn't work", err}))
}


module.exports.deleteOneJoke = (req,res) => {
    Joke.deleteOne({_id: req.params._id}) 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"Whoops! That didn't work", err}))
}
module.exports.updateOneJoke = (req,res) => {
    Joke.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"Whoops! That didn't work", err}))
}