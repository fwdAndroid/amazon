const express =require("express");
const mongoose = require("mongoose");
const authRouter = require('./routes/auth');
const PORT = 3000;
const app = express();

//Middleware Use TO communicate Data
app.use(authRouter);

//Connections
mongoose.connect().then(() => {
    console.log("Connection Established")
}).catch(e => {
    console.log(e)
});

app.listen(PORT,"0.0.0.0",() => {
    console.log(`connected at port ${PORT}`);
})