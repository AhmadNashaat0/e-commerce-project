import productsRoute from './products.js'
import orderRoute from './OrderRoutes.js'
const routes =  (app) => {
    app.use('/api/products', productsRoute);
    app.use('/api/orders',orderRoute)
}

export default routes