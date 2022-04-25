import productsRoute from './products.js';
import cartRouter from './cart.js';
import usersRoute from './users.js';

const routes =  (app) => {
    app.use('/api/products', productsRoute);
    app.use('/api/cart', cartRouter);
    app.use('/api/users', usersRoute);
}

export default routes