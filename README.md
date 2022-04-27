# E-Commerce App - REST API with MongoDB
---

e-commerce app API to handel online shopping procedures, such as users, products, and orders.
tools used include `Node.js` `Express` `MongoDB` 


## Image installation


```
docker pull ahmednashaat/ecommerce-backend
docker run -p 3000:3000  ahmednashaat/node-app:1.
```

to try it online follow this link : [e-commerce API](https://ecommerce-backend-testproject.herokuapp.com)


## API Routes

- Users Endpoint

| Routes               	| Method 	| Description             	|
|----------------------	|--------	|-------------------------	|
| /api/users           	| Get    	| get all users           	|
| /api/users/:id       	| Get    	| get user by id          	|
| /api/users/register  	| Post   	| register a user         	|
| /api/users/login     	| Post   	| user login              	|
| /api/users/logout    	| Post   	| user logout             	|
| /api/users/logoutAll 	| Post   	| user logout all devices 	|
| /api/users/me        	| Get    	| user account            	|
| /api/users/me        	| Put    	| user update his account 	|
| /api/users/me        	| Delete 	| user delete his account 	|
<br>

- Products Endpoint

| Routes           	| Method 	| Description       	|
|------------------	|--------	|-------------------	|
| /api/product     	| Get    	| get all products  	|
| /api/product     	| Post   	| add products      	|
| /api/product/:id 	| Get    	| get product by id 	|
| /api/product/:id 	| Patch  	| update product    	|
| /api/product/:id 	| Delete 	| delete product    	|
<br>

- Orders Endpoint

| Routes               	| Method 	| Description         	|
|----------------------	|--------	|---------------------	|
| /api/orders          	| Get    	| get all orders      	|
| /api/orders          	| Post   	| create order        	|
| /api/orders/:id      	| Get    	| get order by id     	|
| /api/orders/:id      	| Patch  	| update order        	|
| /api/orders/:id      	| Delete 	| delete order        	|
| /api/orders/myorders 	| Get    	| get all user orders 	|
<br>
