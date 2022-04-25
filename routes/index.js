import productsRoute from './products.js';
import cartRouter from './cart.js';
import usersRoute from './users.js';
import orderRoute from './OrderRoutes.js';

const routes =  (app) => {
    app.use('/api/products', productsRoute);
    app.use('/api/cart', cartRouter);
    app.use('/api/users', usersRoute);
    app.use('/api/orders',orderRoute);
}

export default routes