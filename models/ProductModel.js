import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qunatity: {
    type: Number,
    required: true,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("quantity must be +ve");
    },
  },
  description: {
    type: String,
    min: 10,
  },
  color: {
    type: String,
    enum: ["red", "green", "blue", "black", "white"],
    default: "black",
  },
  size: {
    type: String,
    enum: ["small", "meduim", "large", "x-large"],
    default: "meduim",
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("price must be +ve");
    },
  },
  images: [
    {
      type: String,
    },
  ],
});
const Product = mongoose.model("product", productSchema);

export default Product;
