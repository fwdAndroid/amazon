const express =require("express");

const authRouter = express.Router();

authRouter.get("/user",(req,res) => {
 res.json({id:"awad"})
});

//Export this files mean able to use this files function in anyother file
module.exports = authRouter;  