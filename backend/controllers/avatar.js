const User = require("../models/user");

module.exports.avatar=async(req,res)=>{
try {
    const user_id=req.params.id
    const {image}=req.body;
    const user=await User.findByIdAndUpdate(user_id,{
        isAvatarImageSet:true,
        avatarImage:image
    })
    return res.json({isSet:user.isAvatarImageSet,image:user.avatarImage})
} catch (error) {
    next(error)
}
}