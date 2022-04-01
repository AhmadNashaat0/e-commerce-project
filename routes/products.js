import express from "express";
import {updateProduct, deleteProduct, addProduct} from '../controllers/products.js';
const router = express.Router();


router
    .route('/')
    .post(addProduct)
router
    .route("/:id")
    .put(updateProduct)
    .delete(deleteProduct)

export default router;
