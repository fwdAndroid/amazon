const express =require("express");
const mongoose = require("mongoose");
const authRouter = require('./routes/auth');
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://fwdkaleem:_Zeo1234567890@cluster0.etasruq.mongodb.net/?retryWrites=true&w=majority"

//Middleware Use TO communicate Data
app.use(express.json());
app.use(authRouter);

//Connections
mongoose.connect(DB).then(() => {
    console.log("Connection Established")
}).catch(e => {
    console.log(e)
});

app.listen(PORT,"0.0.0.0",() => {
    console.log(`connected at port ${PORT}`);
})