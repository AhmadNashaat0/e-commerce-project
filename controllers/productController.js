import Product from "../models/ProductModel.js";

export const addProduct = async (req, res) => {
  console.log("adding");
  try {
    //const product = new Product(req.body);
    //await product.save();
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
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};
/*
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId });
    if (req.body.name) {
      product.name = req.body.name;
    }
    if (req.body.qunatity) {
      product.qunatity = req.body.qunatity;
    }
    if (req.body.description) {
      product.description = req.body.description;
    }
    if (req.body.color) {
      product.color = req.body.color;
    }
    if (req.body.size) {
      product.size = req.body.size;
    }
    if (req.body.category) {
      product.category = req.body.category;
    }
    if (req.body.price) {
      product.price = req.body.price;
    }
    if (req.body.images) {
      product.images = req.body.images;
    }
    await product.save();
  } catch (error) {
    res.status(400).send(error);
  }
};
*/
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
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.deleteOne({ _id: productId });
    res.status(200).send(product);
  } catch (error) {}
};
/*
module.exports = {
  addProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
};
*/
