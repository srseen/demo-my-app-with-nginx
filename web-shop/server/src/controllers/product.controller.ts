import { Request, Response } from "express";
import { Product } from "../models/product.model";

export const getAllProducts = async (_: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
};
