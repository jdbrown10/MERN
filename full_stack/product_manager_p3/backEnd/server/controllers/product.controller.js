const Product = require("../models/product.model")

module.exports.testResponse = (req,res) =>{
    res.json({message:"ooooo I'm in a different file now!"});
}

module.exports.findAllProducts = (req,res) => {
    Product.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.createProduct = (req,res) => {
    Product.create(req.body) //this will be for all the post requests
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.findOneProduct = (req,res) => {
    Product.findOne({_id: req.params._id}) 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}

module.exports.deleteOneProduct = (req,res) => {
    Product.deleteOne({_id: req.params._id}) 
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}
module.exports.updateOneProduct = (req,res) => {
    Product.updateOne({_id: req.params._id}, req.body, {runValidators:true})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"That didn't quite work", err}))
}