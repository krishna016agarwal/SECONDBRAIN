const User = require("../models/user")

module.exports.getAllUsers=async(req,res)=>{
   try {
    const users=await User.find({_id:{$ne:req.params.id}}).select(["email","username","avatarImage","_id"])

return res.json(users)
   } catch (error) {
    next(error)
   } 
}