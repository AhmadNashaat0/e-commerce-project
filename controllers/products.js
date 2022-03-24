import Products from "../data/products.js";

// POST product
export const addProduct = (req, res) => {
  try {
    const id = Products.length;
    Products.push({ ...req.body, id });
    res.status(200).send({ ...req.body, id });
  } catch (e) {
    res.status(400).send(e);
  }
};
