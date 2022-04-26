import express from "express";
import cookies from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB  from "./db/connect.js";
import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookies());
routes(app);

connectDB(process.env.DATABASE_CLOUD);
app.listen(port, () => console.log(`Server works on port : ${port}`));
