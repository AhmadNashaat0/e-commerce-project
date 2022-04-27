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
