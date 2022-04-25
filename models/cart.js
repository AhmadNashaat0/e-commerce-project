import mongoose from "mongoose";
const { Schema } = mongoose;

const CartItemSchema = new Schema({ 
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1
  },
  itemPrice: {
    type: Number,
    default: 0
  },
  totalPrice: {
    type: Number,
    default: 0
  },
  priceWithTax: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'Not processed',
    enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
  }
});


const CartSchema = new Schema({
  products: {
    type:  [CartItemSchema],
    default: []
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    imutable: true,
    default: () => Date.now()
  },
  updatedAt: {
    type: Date,
    default: () => Date.now()
  }
});

moudul.exports =  mongoose.model('CartItem', CartItemSchema);
export default mongoose.model('Cart', CartSchema);
