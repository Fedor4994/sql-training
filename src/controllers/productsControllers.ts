import { NextFunction, Response, Request } from "express";
import { Product } from "../types/product.js";
import { RequestError } from "../helpers/RequestError.js";
import {
  addProduct,
  getAllProducts,
  getProductById,
} from "../service/productsService.js";

export const getAllProductsController = async (
  req: Request,
  res: Response<{ products: Product[]; total: number }>,
  next: NextFunction
) => {
  try {
    const data = await getAllProducts();
    const { products, total } = data;

    res.json({ products, total });
  } catch (err) {
    next(err);
  }
};

export const getProductByIdController = async (
  req: Request,
  res: Response<Product>,
  next: NextFunction
) => {
  try {
    const product = await getProductById(req.params.id);

    if (!product) {
      throw RequestError(404, "Not found");
    }

    res.json(product);
  } catch (err) {
    next(err);
  }
};

export const addProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, pries } = req.body;
    const data = await addProduct(name, pries);
    const newProductId = Number(data.insertId);

    res.json({ newProductId });
  } catch (err) {
    next(err);
  }
};
