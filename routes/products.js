import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
  addProduct,
} from "../controllers/productController.js";


router
  .route("/")
  .get(getProducts)
  .post(addProduct);

router
  .route("/:id")
  .get(getProductsById)
  .patch(updateProduct)
  .delete(deleteProduct);

export default router;
