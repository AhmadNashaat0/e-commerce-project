import express from "express"
import { deleteProduct} from "../controllers/products.js";
const router = express.Router();

router
    .route('/')

router
    .route('/:id')
    .delete(deleteProduct)


export default router;