import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProducts(req: Request, res: Response) {
  try {
    const { category, description, image, ingredients, name, price } = req.body;
    const imagePath = req.file?.filename;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients),
      imagePath,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
