const User = require("../models/user");
const bcrypt = require("bcrypt");
module.exports.login=async(req,res)=>{
    try {
        const {username,password}=req.body;
    const user=await User.findOne({$or:[{username:username},{email:username}]})
    if (!user) {
        return res.json({status:false,message:"Username / Email are unvalid"})
        
    }
   
  
    
    const isPasswordValid=await bcrypt.compare(password,user.password);
 
    
    if (!isPasswordValid) {
       
        
        return res.json({status:false,message:"Incorrect Password"})
    }
    
    delete user.password;
    return res.json({status:true,user})
    } catch (error) {
        return res.json({error: error, status: false})
    }
    
}