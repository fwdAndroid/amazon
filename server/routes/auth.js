const express =require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.post("/api/signup",async (req, res) => {
    try{
        const {name , email, password} = req.body;

    const existingUser = await User.findOne({ email });

    if(existingUser){
        return res.status(400).json({msg:"User email Already exist"});
    }
    const hashedPassword = await bcryptjs.hash(password, 8);

    
    let user = new User({
        email,
        name,
        password: hashedPassword,
    })

    user = await user.save();
    res.json(user)
    }catch(e){
        res.status(500).json({error:e.message});
    }
});
//SignIn
authRouter.post("/api/signin", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ msg: "User with this email does not exist!" });
      }
  
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect password." });
      }
  
      const token = jwt.sign({ id: user._id }, "passwordKey");
      //... means object destructing use to access models
      res.json({ token, ...user._doc });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

//Export this files mean able to use this files function in anyother file
module.exports = authRouter;  