import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token || '';
        const decoded = jwt.verify(token, 'secret_key');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error('you are not logged in');
        }
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({'error':e.message});
    }
}

export default auth;
