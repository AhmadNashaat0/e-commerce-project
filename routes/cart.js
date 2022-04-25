import express from "express";
const router = express.Router();
import auth from '../middleware/auth.js';

import {
    getAllCarts,
    getCart,
    createCart,
    removeCart,
    getProductsFromCart,
    addProductToCart,
    removeProductFromCart,
    getProductsStatus,
    updateProductStatus
} from "../controllers/cart.js";

router
    .route('/')
    .get(auth, getAllCarts)
    .post(createCart)

router
    .route('/:cartId')
    .get(auth, getCart)
    .delete(auth, removeCart)
    
router
    .route('/:cartId/products')    
    .get(auth, getProductsFromCart)
router
    .route('/:cartId/products/status')
    .get(auth, getProductsStatus)
router
    .route("/:cartId/:productId")
    .patch(auth, addProductToCart)
    .delete(auth, removeProductFromCart)

router
    .route("/:cartId/:productId/status")
    .patch(auth, updateProductStatus)

export default router;