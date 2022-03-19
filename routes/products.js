import express from "express";
import { addProduct } from "../controllers/products.js";

const router = express.Router();

router.route("/").post(addProduct);

export default router;
