const User = require("../models/user.model");
const Product = require("../models/product.model");
const wrapAsync = require("../utils/wrapAsync");

// INTERNAL USE
// Add a new product to the shop
const addProduct = async (req, res) => {
  try {
    const { title, price, description, image, subCategory } = req.body;
    const product = new Product({
      title,
      price,
      description,
      image,
      subCategory,
    });
    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// INTERNAL USE
// Delete a product by ID from the shop
const deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// INTERNAL USE
// Update a product by ID from the shop
const updateProductById = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a product by ID from the shop
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products from the shop
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log("products: ", products);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// userId, cart= [list of productId, quantity]
const purchaseProducts = wrapAsync(async (req, res) => {
  try {
    const { userId, cart } = req.body;

    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // // Iterate over the cart and add each product to the productsPurchased array
    for (const item of cart) {
      const { productId, quantity } = item;

      // Add the product to the productsPurchased array multiple times based on quantity
      for (let i = 0; i < quantity; i++) {
        user.productsPurchased.push({
          product: productId,
          cycleStage: 0,
          purchaseDate: new Date(),
        });
      }
    }

    // // Save the updated user object
    await user.save();

    res.status(200).json({
      message: "Products added to user's purchased list successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add products to user's purchased list",
      error: error.message,
    });
  }
});

module.exports = {
  addProduct,
  deleteProductById,
  updateProductById,
  getProductById,
  getAllProducts,
  purchaseProducts,
};
