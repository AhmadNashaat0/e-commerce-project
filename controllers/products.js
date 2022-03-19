//products controller
import Products from "../data/products.js"


// GET products

// GET product by id



// POST product


// UPDATE product

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


