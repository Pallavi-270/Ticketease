const jwt = require("jsonwebtoken");
module.exports=(req,res,next)=>{
const token=req.header("Authorization");
if(!token)
    return res.status(401).json({msg:"no token"})
try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.USER=decoded;
    next();
}catch(err){
res.status(401).json({msg:"invalid token"})
}
};