import Order from "../models/orderModel.js"; 


// @desc    Get All Orders
// @route   GET /api/orders
// @access  Private/Admin
export const getAllOrders = async(req,res,next) =>{
  try{
const orders = await Order.find({})

    res.status(200).json({
        status:"Success",
        count:orders.length,
        data:orders
    })}
 catch(e) {
  res.status(400).json({
            status:"fail",
            data:error
        })

}
}
// @desc    Get User Orders
// @route   GET /api/orders/myorders
// @access  Private
export const getUserOrder = async(req,res,next) =>{
    try {
        const user = req.user._id;
        const orders = await Order.find({user})
    
        res.status(200).json({
            status:"Success",
            count:orders.length,
            data:orders
        })
        
    } catch (error) {
        res.status(400).json({
            status:"fail",
            data:error
        })
    }
}

// @desc    Get Order By id
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = async(req,res,next)=>{

    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
    
        if(!order){
            throw new Error('No order found')
        }
    
        res.status(200).json({
            status:"Success",
            data:{
                order
            }
        });
        
    } catch (error) {
        res.status(500).json({
            status:"Fail",
            data:error
        })
    }
}

// @desc    Create Order
// @route   POST /api/orders/
// @access  Private
export const createOrder = async (req,res,next) =>{
    try {
        const user = req.user._id;
        const {
            cart,
            totalPrice,
            paid,
            paymentMethod,
            address
        } = req.body;
        if(!cart)
        {
            throw new Error("No cart found")
        }
    
        const newOrder = await Order.create({
            user,
            cart,
            totalPrice,
            paid,
            paymentMethod,
            address,
        })
        res.status(201).json({
            status:"Success",
            data:{
                newOrder
            }
        });
        
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            data:error
        })
    }
}

// @desc    update an Order
// @route   patch /api/orders/:id
// @access  Private
export const updateOrder = async(req,res,next)=>
{
   try {
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
   } catch (error) {
    res.status(404).json({
        status:"Fail",
        data:error
    })
   }
};

// @desc    update an Order
// @route   patch /api/orders/:id
// @access  Private
export const deleteOrder = async(req,res,next)=>{
   try {
    const orderId = req.params.id;
    const order = await Order.findByIdAndDelete(orderId);

    if(!order)
    {
        //handle error
        throw new Error("can't find order with this ID")
    }
    res.status(200).json({
        status:"Success",
        data:{
            order
        }
    });
   } catch (error) {
    res.status(404).json({
        status:"Fail",
        data:error
    });
   }
}
