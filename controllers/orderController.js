import Order from "../models/orderModel.js"; 


// @desc    Get All Orders
// @route   GET /api/orders
// @access  Private/Admin
export const getAllOrders = async(req,res,next) =>{
const orders = await Order.find({})

    res.status(200).json({
        status:"Success",
        count:orders.length,
        data:orders
    })
}
// @desc    Get User Orders
// @route   GET /api/orders/myorders
// @access  Private
export const getUserOrder = async(req,res,next) =>{
    const user = req.user._id;
    const orders = await Order.find({user})

    res.status(200).json({
        status:"Success",
        count:orders.length,
        data:orders
    })
}

// @desc    Get Order By id
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = async(req,res,next)=>{
    const orderId = req.params.id;
    const order = await Order.findById(orderId);

    if(!order){
        // handle error
    }

    res.status(200).json({
        status:"Success",
        data:{
            order
        }
    })
}

// @desc    Create Order
// @route   POST /api/orders/
// @access  Private
export const createOrder = async (req,res,next) =>{
    const user = req.user._id;
    const {
        cart,
        totalPrice,
        paid,
        paymentMethod,
        address
    } = req.body;
    if(!cart) // TODO: handle empty cart
    {
        // HANDLE ERROR
    }

    const newOrder = await Order.create({
        user,
        cart,
        totalPrice,
        paid,
        paymentMethod,
        address
    })
    res.status(201).json({
        status:"Success",
        data:{
            newOrder
        }
    })
}

// @desc    update an Order
// @route   patch /api/orders/:id
// @access  Private
export const updateOrder = async(req,res,next)=>
{
    const orderId = req.params.id;
    const toUpdate = req.body;
    const allowedUpdates = ["totalPrice","paid","paymentMethod","address"];
    let updates = {}
    for(let update in toUpdate){
        if(allowedUpdates.includes(update))
            updates = {...updates , [update]:toUpdate[update]};
    }
    const order = await Order.findByIdAndUpdate(orderId,updates,{
        new:true,
        runValidators:true
    });

    if(!order)
    {
        //handle error
        return next("");
    }
    res.status(200).json({
        status:"Success",
        data:{
            order
        }
    });
};
// @desc    update an Order
// @route   patch /api/orders/:id
// @access  Private
export const deleteOrder = async(req,res,next)=>{
    const orderId = req.params.id;
    const order = await Order.findByIdAndDelete(orderId);

    if(!order)
    {
        //handle error
        return next("");
    }
    res.status(200).json({
        status:"Success",
        data:{
            order
        }
    });
}