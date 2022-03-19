import Products from "../data/products.js";

// POST product
export const addProduct = (req, res) => {
  const id = Products.length;
  Products.push({ ...req.body, id });
  res.send({ ...req.body, id });
};
