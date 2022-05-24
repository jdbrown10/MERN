const Author = require("../models/author.model");

module.exports.testEndpoint = (req,res) => {
    res.json({message: "hello from the author controller"});
}

module.exports.findAllAuthors = (req,res) => {
    Author.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.createAuthor = (req,res) => {
    Author.create(req.body) //this will be for all the post requests
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.findOneAuthor = (req,res) => {
    Author.findOne({_id: req.params._id}) 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.deleteOneAuthor = (req,res) => {
    Author.deleteOne({_id: req.params._id}) 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}
module.exports.updateOneAuthor = (req,res) => {
    Author.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}