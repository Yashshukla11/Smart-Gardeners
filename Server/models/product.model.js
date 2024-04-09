// name
// price
// description
// category
// image
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const subCategoryEnum = [
// "kit", // choco coir, kit, mothercup, mothertray,
// "flower", // seeds
// "vegetable", // seeds
// "fruit", // seeds
// "kitConsumables", // nutrientpackets
// ];

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    subCategory: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
