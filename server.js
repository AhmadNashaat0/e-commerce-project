import express from "express";
import routes from './routes/index.js';
const app = express();

app.use(express.json());
routes(app);

app.listen(3000,()=>console.log('connocted to the server on port 3000'))