import User from '../models/user.js';


export const register = async(req,res)=>{
    try{
        const user = new User(req.body);
        const token = user.makeToken();
        await user.save();
        res.cookie('token',token);
        res.status(200).send('user added');
    }catch(e){
        res.status(400).send(e.message);
    }
}

export const login =async(req,res)=>{
    try{
        const user = await User.login(req.body);
        const token = user.makeToken();
        await user.save();
        res.cookie('token',token);
        res.status(200).json({'message':'user logged in', 'token':token});
    }catch(e){
        res.status(400).json({'error':e.message});
    }
}

export const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.cookies.token;
        });
        await req.user.save();
        res.status(200).send('user logged out');
    } catch (e) {
        res.status(500).send(e.message);
    }
}

export const logoutAll = async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send('user logged out from all places');
    } catch (e) {
        res.status(500).send(e.message);
    }
}

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
        res.status(200).send('user updated');
    }catch(e){
        res.status(400).send(e.message);
    }
}

export const deleteMe = async(req, res) => {
    try {
        await req.user.remove();
        res.status(200).send('user deleted');
    } catch (e) {
        res.status(500).send(e.message);
    }
}

export const getMe = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (e) {
        res.status(500).send(e.message);
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).send(e.message);
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (e) {
        res.status(500).send(e.message);
    }
}


