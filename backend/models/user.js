const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        unique:true
    } ,
    email:{
        type:String,
        require:true,
        unique:true,
        max:30
    },
    password:{
        type:String,
        require:true,
        min:6 ,
        max:30
    },
    isAvatarImageSet:{
        type:Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:""

    }
  });


  const User = mongoose.model('User', userSchema);
  module.exports=User