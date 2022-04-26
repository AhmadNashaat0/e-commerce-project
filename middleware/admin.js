
const admin = (req,res,next)=>{
    try{
        if(!req.user.admin) throw new Error('you have no premission to access this endpoint');
        next();
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
}

export default admin;