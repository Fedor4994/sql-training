import express from "express";
import {
  addProductController,
  getAllProductsController,
  getProductByIdController,
} from "../controllers/productsControllers.js";
import { addProductValidation } from "../middleware/validatinonMiddleware.js";

export function createProductsRouter() {
  const router = express.Router();

  router.get("/", getAllProductsController);
  router.get("/:id", getProductByIdController);
  router.post("/", addProductValidation, addProductController);

  return router;
}
