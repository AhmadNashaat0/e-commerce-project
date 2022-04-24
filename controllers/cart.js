import Cart from "../models/cart.js";
// import Product from "../models/product.js";

// getting cart
const getCart = async (req, res) => {
    try {
        const cart = req.params.cartId;
        // const cart = await Cart.findOne({ user: req.user._id });
        res.status(200).send(cart);
    } catch (e) {
        res.status(400).send(e);
    }
}

// creating cart
const createCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        res.status(200).send(cart);
    } catch (e) {
        res.status(400).send(e);
    }
}

// removing cart
const removeCart = async (req, res) => {
    try {
        const cart = req.params.cartId;
        // const cart = await Cart.deleteOne({ user: req.user._id });
        res.status(200).send(cart);
    } catch (e) {
        res.status(400).send(e);
    }
}

// getting products from cart
const getProductsFromCart = async (req, res) => {
    try {
        const cart = req.params.cartId;
        // const cart = await Cart.findOne({ user: req.user._id });
        const products = await Product.find({ _id: { $in: cart.products.map(item => item.product) } });
        res.status(200).send(products);
    } catch (e) {
        res.status(400).send(e);
    }
}

// adding product to cart
const addProductToCart = async (req, res) => {
    try {
        const cart = req.params.cartId;
        const product = req.params.productId;
        // const cart = await Cart.findOne({ user: req.user._id });
        // const product = await Product.findById(req.body.product);
        const cartItem = cart.products.find(item => item.product.toString() === product._id.toString());
        if (cartItem) {
            cartItem.quantity += 1;
            calculateCartPrice(cartItem);
        } else {
            cart.products.push({
                product: product._id,
                quantity: 1,
                itemPrice: product.price,
                itemTax: product.tax,
                totalPrice: product.price,
                totalTax: product.tax,
                priceWithTax: product.price + product.tax
            });
        }
        cart.updatedAt = Date.now();
        await cart.save();
        res.status(200).send(cart);
    } catch (e) {
        res.status(400).send(e);
    }
}

// removing product from cart
const removeProductFromCart = async (req, res) => {
    try {
        const cart = req.params.cartId;
        const product = req.params.productId;
        // const cart = await Cart.findOne({ user: req.user._id });
        // const product = await Product.findById(req.body.product);
        const cartItem = cart.products.find(item => item.product.toString() === product._id.toString());
        if (cartItem) {
            if (cartItem.quantity === 1) {
                cart.products.pull(cartItem);
            } else {
                cartItem.quantity -= 1;
                calculateCartPrice(cartItem);
            }

        }
        cart.updatedAt = Date.now();
        await cart.save();
        res.status(200).send(cart);
    } catch (e) {
        res.status(400).send(e);
    }
}

// getting products status
const getProductsStatus = async (req, res) => {
    try {
        const cart = req.params.cartId;
        // const cart = await Cart.findOne({ user: req.user._id });
        const products = await Product.find({ _id: { $in: cart.products.map(item => item.product) } });
        const productsStatus = products.map(product => {
            const cartItem = cart.products.find(item => item.product.toString() === product._id.toString());
            return {
                product: product._id,
                status: cartItem.status
            }
        });
        res.status(200).send(productsStatus);
    } catch (e) {
        res.status(400).send(e);
    }
}

// updating product status
const updateProductStatus = async (req, res) => {
    try {
        const cart = req.params.cartId;
        const product = req.params.productId;
        // const cart = await Cart.findOne({ user: req.user._id });
        // const product = await Product.findById(req.body.product);
        const cartItem = cart.products.find(item => item.product.toString() === product._id.toString());
        if (cartItem) {
            cartItem.status = req.body.status;
        }
        cart.updatedAt = Date.now();
        await cart.save();
        res.status(200).send(cart);
    } catch (e) {
        res.status(400).send(e);
    }
}

// helper function for calculating cart price
const calculateCartPrice = (item) => {
    item.totalPrice = item.quantity * item.itemPrice;
    item.totalTax = item.quantity * item.itemTax;
    item.priceWithTax = item.totalPrice + item.totalTax;
    return { totalPrice, totalTax, priceWithTax };
}


modules.exports = {
    getCart,
    createCart,
    removeCart,
    getProductsFromCart,
    addProductToCart,
    removeProductFromCart,
    getProductsStatus,
    updateProductStatus
}

