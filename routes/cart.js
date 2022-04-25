import express from "express";
const router = express.Router();

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
    .get(getAllCarts)
    .post(createCart)
router
    .route('/:cartId')
    .get(getCart)
    .delete(removeCart)
    
router
    .route('/:cartId/products')    
    .get(getProductsFromCart)
router
    .route('/:cartId/products/status')
    .get(getProductsStatus)
router
    .route("/:cartId/:productId")
    .patch(addProductToCart)
    .delete(removeProductFromCart)

router
    .route("/:cartId/:productId/status")
    .patch(updateProductStatus)

export default router;