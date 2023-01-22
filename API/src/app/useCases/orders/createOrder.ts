import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function createOrders(req: Request, res: Response) {
  try {
    const { table, products } = req.body;
    if (!table) {
      return res.status(400).json({
        error: "Table is required",
      });
    }
    if (!products) {
      return res.status(400).json({
        error: "Products is required",
      });
    }
    const order = await Order.create({ table, products });
    res.status(201).json(order);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
