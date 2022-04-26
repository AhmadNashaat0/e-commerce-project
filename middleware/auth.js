import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token || '';
        const decoded = jwt.verify(token, 'secret_key');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        
        if (!user) {
            throw new Error('you must be authenticated');
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: error.message
        });
    }
}

export default auth;
