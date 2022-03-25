import express from "express";
import {updateProduct, deleteProduct} from '../controllers/products.js';
const router = express.Router();


router
    .route('/')

router
    .route("/:id")
    .put(updateProduct)
    .delete(deleteProduct)

export default router;