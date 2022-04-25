import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
 
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cart'
    },
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
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    }

});

// orderSchema.pre(/^find/,function(next){
//     this.populate('user')
//     next();
// })

const Order = mongoose.model('Order',orderSchema);

export default Order;