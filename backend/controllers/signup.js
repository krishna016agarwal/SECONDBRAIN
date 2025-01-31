const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    
    const usernamecheck = await User.findOne({ username });
    if (usernamecheck) {
      return res.json({ message: "Username already used", status: false });
    }
    const useremailcheck = await User.findOne({ email });
    if (useremailcheck) {
      return res.json({ message: "Email already used", status: false });
    }

    if (password.length > 30) {
      return res.json({
        message: "password should not exceed 30",
        status: false,
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashpassword,
    });

    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    return res.json({ error: error, status: false });
  }
};
