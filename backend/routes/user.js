const { avatar } = require("../controllers/avatar")
const { getAllUsers } = require("../controllers/getAllUsers")
const { login } = require("../controllers/login")
const { signup } = require("../controllers/signup")

const router=require("express").Router()

router.post("/signup",signup)

router.post("/login",login)

router.post("/avatar/:id",avatar)

router.get("/allUsers/:id",getAllUsers)

module.exports=router;

   