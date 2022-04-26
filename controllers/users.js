
import User from '../models/user.js';

// @description    register new user to DB and add token to cookie
// @route          POST /api/users/register
// @access         public
export const register = async(req,res)=>{
    try{
        const user = new User(req.body);
        const token = user.makeToken();
        await user.save();
        res.cookie('token',token);
        res.status(200).json({
            status:"Success",
            message:"User added successfully",
            user: user,
            token: token
        });
    }catch(error){
        res.status(400).json({
            status:"error",
            message:error.message
        });
    }
}

// @description    authenticate a user
// @route          POST /api/users/login
// @access         public
export const login = async(req,res)=>{
    try{
        const user = await User.login(req.body);
        const token = user.makeToken();
        await user.save();
        res.cookie('token',token);
        res.status(200).json({
            status:"Success",
            message:"User loged in successfully",
            user: user,
            token: token
        })
    }catch(error){
        res.status(400).json({
            status:"error",
            message:error.message
        });
    }
}

// @description    remove the authenticate (token) for a user
// @route          POST /api/users/logout
// @access         private
export const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.cookies.token;
        });
        await req.user.save();
        res.status(200).json({
            status:"Success",
            message:"User loged out successfully",
        })
    }catch(error){
        res.status(400).json({
            status:"error",
            message: error.message
        });
    }
}

// @description    remove all tokens for a user and log out him from all devices
// @route          POST /api/users/logoutAll
// @access         private
export const logoutAll = async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).json({
            status:"Success",
            message:"User logged out from all places successfully",
        })
    }catch(error){
        res.status(400).json({
            status:"error",
            message: error.message
        });
    }
}

// @description    user edit specified information ['firstName', 'lastName', 'email', 'password']
// @route          PATCH /api/users/me
// @access         private
export const editMe = async (req,res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName', 'email', 'password'];
    const ValidOperation = updates.filter((update) => allowedUpdates.includes(update));
    try{
        if (!ValidOperation) {
            throw new Error("sorry no vaild information represented");
        }
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();
        res.status(200).json({
            status:"Success",
            message:"User updated successfully",
            user: req.user
        })
    }catch(error){
        res.status(400).json({
            status:"error",
            message: error.message
        });
    }
}

// @description    user delete his account from DB
// @route          DELETE /api/users/me
// @access         private
export const deleteMe = async(req, res) => {
    try {
        const tempUser = {... req.user}
        await req.user.remove();
        res.status(200).json({
            status:"Success",
            message:"User deleted successfully",
            user: tempUser
        })
    }catch(error){
        res.status(400).json({
            status:"error",
            message: error.message
        });
    }
}

// @description    user get his account
// @route          GET /api/users/me
// @access         private
export const getMe = async (req, res) => {
    try {
        res.status(200).json({
            status:"Success",
            message:"User returned successfully",
            user: req.user
        })
    }catch(error){
        res.status(400).json({
            status:"error",
            message: error.message
        });
    }
}

// @description    get all user in DB
// @route          GET /api/users
// @access         private & admin
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status:"Success",
            message:"All users returned successfully",
            users: users
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            message: error.message
        });
    }
}

// @description    get user by id from DB
// @route          GET /api/users
// @access         private & admin
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status:"Success",
            message:`user with id:req.params.id returned successfully`,
            users: user
        })
    }catch(error){
        res.status(500).json({
            status:"error",
            message: error.message
        });
    }
}


