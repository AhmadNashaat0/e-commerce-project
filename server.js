import express from "express";
import { connectDB } from "./db/connect.js";
import dotenv from 'dotenv'
import routes from './routes/index.js';
import cookies from 'cookie-parser';

dotenv.config()

const app = express();
app.use(express.json());
app.use(cookies());
routes(app);

connectDB(process.env.DATABASE_CLOUD)
app.listen(3000,()=>console.log('connected to the server on port 3000'))
