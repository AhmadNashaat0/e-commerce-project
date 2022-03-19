import {rtrnAllowedParams} from "../utils/products.js"
import Products from "../data/products.js"

// GET products
// GET product by id



// POST product


// UPDATE product
export const updateProduct = function(req, res){
    try{
        const id = req.params.id * 1;

        const index = Products.findIndex(obj => obj.id === id);
        if(index < 0) throw "Error: Wrong ID product";
    
        const newParams = rtrnAllowedParams(req.body);
        if(!newParams) throw "Error: No params to update";
        
        //validate

        Products[index] = {...Products[index], ...newParams};

        res.status(200).json(Products[index]);

    }catch(err){
        res.status(404).json({error:err});
    }
}

// DELETE product



