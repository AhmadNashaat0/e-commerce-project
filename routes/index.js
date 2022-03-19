import productsRoute from './products.js'

const routes =  (app) => {
    app.use('/api/products', productsRoute);
}

export default routes