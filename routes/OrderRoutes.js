import express from "express";
import { createOrder, getAllOrders,getUserOrder,getOrderById,updateOrder, deleteOrder } from "../controllers/orderController.js";
// import {} from ''

const router = express.Router();

router.
    route('/')
    .get(getAllOrders)
    .post(createOrder);

router
    .route('/myorders')
    .get(getUserOrder)

router.
    route('/:id')
    .get(getOrderById)
    .patch(updateOrder)
    .delete(deleteOrder);

export default router;    