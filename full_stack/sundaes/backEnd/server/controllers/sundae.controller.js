const Sundae = require("../models/sundae.model")

module.exports.testResponse = (req,res) =>{
    res.json({message:"ooooo I'm in a different file now!"});
}

module.exports.findAllSundaes = (req,res) => {
    Sundae.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.createSundae = (req,res) => {
    Sundae.create(req.body) //this will be for all the post requests
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.findOneSundae = (req,res) => {
    Sundae.findOne({_id: req.params._id}) 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.deleteOneSundae = (req,res) => {
    Sundae.deleteOne({_id: req.params._id}) 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}
module.exports.updateOneSundae = (req,res) => {
    Sundae.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}