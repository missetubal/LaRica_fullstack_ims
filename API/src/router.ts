import { Router } from "express";

export const router = Router();

// List categories
router.get("/categories", (req, resp) => {
  resp.send("OK");
});

// Create category
router.post("/categories", (req, resp) => {
  resp.send("OK");
});

// List products
router.get("/products", (req, resp) => {
  resp.send("OK");
});

// Create product
router.post("/products", (req, resp) => {
  resp.send("OK");
});

// Get products by category
router.get("/categories/:categoryId/products", (req, resp) => {
  resp.send("OK");
});

// List orders
router.get("/orders", (req, resp) => {
  resp.send("OK");
});

// Create order
router.post("/orders", (req, resp) => {
  resp.send("OK");
});

// Change order status
router.patch("/orders/:orderId", (req, resp) => {
  resp.send("OK");
});

// Delete/cancel order
router.delete("/orders/:orderId", (req, resp) => {
  resp.send("OK");
});
