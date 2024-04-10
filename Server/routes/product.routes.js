const { Router } = require("express");
const {
  addProduct,
  deleteProductById,
  updateProductById,
  getProductById,
  getAllProducts,
  purchaseProducts,
} = require("../controllers/product.controller.js");

const router = Router();

// Product routes
router.post("/add", addProduct);
router.delete("/:id", deleteProductById);
router.put("/:id", updateProductById);
router.get("/:id", getProductById);
router.get("/", getAllProducts);
router.post("/purchase", purchaseProducts);

module.exports = router;
