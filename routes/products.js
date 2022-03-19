import express from "express";
import {updateProduct} from '../controllers/products.js';

const router = 
express.Router();

router
    .route('/')

router
    .route("/:id")
    .put(updateProduct)
    

export default router;