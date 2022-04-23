import { boolean } from "joi";
import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
    /* TODO:
    //products of order
    */
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    paid:{
        type:Boolean,
        required:[true,"is paid must be specified"],
        default:false
    },
    paymentMethod:{
        type:String,
        required:[true,"Payment method must be specified"],
        enum:['card',"cash-on-delivery"]
    },
    createdAt:{
        type:Date,
        default:Date.now

    }

});

const Order = mongoose.Model('Order',orderSchema);

export default Order;