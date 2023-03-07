const express =require("express");
const User = require("../models/user");

const authRouter = express.Router();
authRouter.post("/api/signup",async (req, res) => {
    try{
        const {name , email, password} = req.body;

    const existingUser = await User.findOne({ email });

    if(existingUser){
        return res.status(400).json({msg:"User email Already exist"});
    }
    
    let user = new User({
        email,
        name,
        password
    })

    user = await user.save();
    res.json(user)
    }catch(e){
        res.status(500).json({error:e.message});
    }
});

//Export this files mean able to use this files function in anyother file
module.exports = authRouter;  