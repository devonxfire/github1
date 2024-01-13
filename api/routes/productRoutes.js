import express from "express";
import { getProducts, getProductsTools } from "../controllers/getProducts.js";
const router = express.Router();
getProducts;

router.get("/products", getProducts);
router.get("/products/tools", getProductsTools);

export default router;
