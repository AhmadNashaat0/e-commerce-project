//products controller
import Products from "../data/products.js";


// GET products
export const getProducts = (req,res) =>{
    if (Products.length === 0) {
        res.status(404).send({error: "client Not Found"});
    } else {
        res.send(Products);
    }
}

// GET product by id
export const getProductsById = (req,res) =>{
    const productId = parseInt(req.params.id);
    const product = Products.find((p) => p.id === productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({error: "Product Not Found"});
    }
}



// POST product


// UPDATE product

// DELETE product


