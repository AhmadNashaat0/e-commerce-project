import express from "express";
// import {} from ''

const router = express.Router();


router.
    route('/')
    .get()
    .post()
router.
    route('/:id')
    .get()
    .patch()
    .delete()    

export default router;    