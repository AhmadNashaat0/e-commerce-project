import Product from "../models/ProductModel.js";

export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send("err" + err);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getProductsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "quantity",
    "description",
    "color",
    "size",
    "category",
    "price",
    "images",
  ];
  const ValidOperation = updates.filter((update) =>
    allowedUpdates.includes(update)
  );
  try {
    let product = await Product.findById(req.params.id);
    if (!ValidOperation) {
      throw new Error("sorry no vaild information represented");
    }
    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    res.status(200).send("Product updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send(product);
  } catch (error) {
  res.status(400).send(error.message);
  }
};

