import productsRoute from './products.js'
import cartRouter from './cart.js'

const routes =  (app) => {
    app.use('/api/products', productsRoute);
    app.use('/api/cart', cartRouter);
}

export default routes