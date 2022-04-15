import express from "express";
import {getProducts, getProductsById, updateProduct, deleteProduct, addProduct} from '../controllers/products.js';
const router = express.Router();


router
    .route('/')
    .get(getProducts)
    .post(addProduct)
router
    .route("/:id")
    .get(getProductsById)
    .put(updateProduct)
    .delete(deleteProduct)


export default router;
