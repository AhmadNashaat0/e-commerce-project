import express from "express";
const router = express.Router();
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import {
    register,getAllUsers , logout, logoutAll, 
    editMe, deleteMe,login , getMe, getUser,
    } from '../controllers/users.js';


router.post('/register', register);

router.post('/login', login);

router.post('/logout', auth, logout);

router.post('/logoutAll', auth, logoutAll);

router
    .route("/me")
    .get(auth, getMe)
    .put(auth ,editMe)
    .delete(auth, deleteMe);

router.get('/:id', getUser);

router.get('/',auth ,admin, getAllUsers);

export default router;