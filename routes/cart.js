import express from "express";
const router = express.Router();

import {
    getCart,
    createCart,
    removeCart,
    getProductsFromCart,
    addProductToCart,
    removeProductFromCart,
    getProductsStatus,
    updateProductStatus
} from "../controllers/cart";

router
    .route('/')
    .post(createCart)
router
    .route('/:cartId')
    .get(getCart)
    .get(getProductsFromCart)
    .get(getProductsStatus)
    .delete(removeCart)
router
    .route("/:cartid/:productid")
    .post(addProductToCart)
    .put(updateProductStatus)
    .delete(removeProductFromCart)


export default router;