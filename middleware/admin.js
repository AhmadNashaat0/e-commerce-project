
const admin = (req,res,next)=>{
    try{
        if(!req.user.admin) throw new Error('you have no premission');
        next();
    }catch(e){
        res.status(200).send(e.message);
    }
}

export default admin;