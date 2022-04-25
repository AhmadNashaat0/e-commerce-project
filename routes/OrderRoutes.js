import express from "express";
import { createOrder, getAllOrders,getUserOrder,getOrderById,updateOrder, deleteOrder } from "../controllers/orderController.js";
import auth from '../middleware/auth.js';

const router = express.Router();

router.
    route('/')
    .get(auth, getAllOrders)
    .post(auth, createOrder);

router
    .route('/myorders')
    .get(auth, getUserOrder)

router.
    route('/:id')
    .get(auth, getOrderById)
    .patch(auth, updateOrder)
    .delete(auth, deleteOrder);

export default router;    