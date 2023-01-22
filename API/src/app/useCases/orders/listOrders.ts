import { Request, Response } from "express";
import { Order } from "../../models/Order";
import { Product } from "../../models/Product";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate("products.product");
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
