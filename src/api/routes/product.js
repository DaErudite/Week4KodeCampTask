const express= require('express')
const products = require("../controllers/product.js");
 const router= express.Router()

    // Create a new Tutorial
    router.post("/", products.create);
    // Retrieve all Tutorials
    router.get("/", products.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:Id", products.findOne);
    // Update a Tutorial with id
    router.put("/:Id", products.update);
    // Delete a Tutorial with id
    router.delete("/:Id", products.delete);
    
module.exports= router    
  
  