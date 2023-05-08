import pool from "../db/pool.js";
import { Product } from "../types/product.js";

export const getAllProducts = async () => {
  const sqlQuery = "SELECT id, name, pries   FROM products;";
  const products = await pool.query<Product[]>(sqlQuery);
  const total = products.length;

  return { products, total };
};

export const getProductById = async (productId: string) => {
  const sqlQuery = "SELECT name, pries FROM products WHERE id=?;";
  const [product] = await pool.query<Product[]>(sqlQuery, productId);
  return product;
};

export const addProduct = async (name: string, pries: number) => {
  console.log(name, pries);
  const sqlQuery = `INSERT INTO products (name, pries) VALUES (?, ?)`;
  const bebra = await pool.query(sqlQuery, [name, pries]);
  console.log(bebra);
  return bebra;
};
