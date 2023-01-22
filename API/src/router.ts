import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategories";
import { createProducts } from "./app/useCases/products/createProduct";
import { listProducts } from "./app/useCases/products/listProducts";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// List products
router.get("/products", listProducts);

// Create product
router.post("/products", upload.single("image"), createProducts);

// Get products by category
router.get("/categories/:categoryId/products", listProductsByCategory);

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
