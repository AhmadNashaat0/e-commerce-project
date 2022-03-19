import express from 'express';
import productRouter from './routes/products.js'
const app = express()

app.use('/products', productRouter)
app.listen(3000, console.log('listning on localhost 3000'))