import jwt from 'jsonwebtoken'


const userAuth = async (req , res,next)=>{
  const {token} = req.headers;


  if(!token){

    return res.json({success:false,message:'Not authorized gareeeb aadami login first'});

  }
  try {
    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)
// is page ko bhulana nhi
    if(tokenDecode.id){
      req.body.userId =tokenDecode.id;


    }else{
      return res.json({success:false,message:'not authorized'})
    }

    next();
  } catch (error) {
    res.json({success:false,message:error.message})
  }
};
export default userAuth;