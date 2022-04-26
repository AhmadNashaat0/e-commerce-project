import productsRoute from './products.js';
import cartRouter from './cart.js';
import usersRoute from './users.js';
import orderRoute from './OrderRoutes.js';


const routes = (app) => {
    app.get('/', function(req, res){
        res.render('../views/index.html');
     });
     app.get('/api', function(req, res){
        res.render('../views/index.html');
     });
    app.use('/api/products', productsRoute);
    app.use('/api/cart', cartRouter);
    app.use('/api/users', usersRoute);
    app.use('/api/orders',orderRoute);
    app.get('*', function(req, res){
        res.status(404).json({
            status:'error',
            message:"404 this Page Not Found"
        });
     });
}

export default routes