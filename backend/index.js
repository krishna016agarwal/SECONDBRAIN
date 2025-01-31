const express = require('express')

const app = express()

require('dotenv').config()

const port = process.env.PORT

const mongoose = require('mongoose');

const cors=require("cors");

const router = require('./routes/user');

app.use(cors())

app.use(express.json())

try {
  mongoose.connect(process.env.MONGODB).then(()=>{
      console.log("mongodb connected");
      
  })
} catch (error) {
  console.log("mongodb connection error : ",error);
  
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use("/api",router)