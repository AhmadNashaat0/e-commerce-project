import express from "express";
import cookies from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB  from "./db/connect.js";
import routes from './routes/index.js';
import path from 'path';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookies());
app.use(express.static('views'));
routes(app);

const mongo_url = process.env.MONGODB_URI || 'mongodb://database:27017' ;

connectDB(process.env.DATABASE_CLOUD);
app.listen(port, () => console.log(`Server works on port : ${port}`));
