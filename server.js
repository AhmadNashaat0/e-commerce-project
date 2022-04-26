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
app.use(express.static('views'));
app.get('/', function(req, res){
    res.render('views/index.html');
 });
app.get('/api', function(req, res){
    res.render('views/index.html');
 });
routes(app);
app.get('*', function(req, res){
    res.status(404).json({
        status:'error',
        message:"404 this Page Not Found",
    });
 });

connectDB(process.env.DATABASE_CLOUD);
app.listen(port, () => console.log(`Server works on port : ${port}`));
