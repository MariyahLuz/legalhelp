exports.createUser= (req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"this route is for creating users"
    })
}