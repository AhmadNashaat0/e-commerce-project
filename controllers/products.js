import {rtrnAllowedParams, validateUpdated} from "../utils/products.js"
import Products from "../data/products.js"


// GET products

// GET product by id



// POST product


// UPDATE product
export const updateProduct = function(req, res){
    try{
        const id = req.params.id * 1;

        //find the product
        const index = Products.findIndex(obj => obj.id === id);
        if(index < 0) throw "Error: Wrong ID product";
        
        //check allowed params
        const newParams = rtrnAllowedParams(req.body);
        if(!newParams) throw "Error: No params to update";
        
        //validate params
        const {error} = validateUpdated(newParams);
        if(error) throw error.details[0].message;

        // update the product
        Products[index] = {...Products[index], ...newParams};

        res.status(200).json(Products[index]);

    }catch(err){
        res.status(404).json({Error:err});
    }
}

// DELETE product
export const deleteProduct = (req,res) =>{

    try {
        const productId = req.params.id * 1;
        //find the index
        const index = Products.findIndex(product => product.id === productId);
        if(index < 0) throw "Error: Wrong ID product";
        Products.splice(index,1)
        res.status(200).json({
            message:"Sucess"
        })
    } catch (e) {
        res.status(500).send(e)
    }





}



