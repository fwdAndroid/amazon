const express =require("express");
const authRouter = require('./routes/auth');
const PORT = 3000;
const app = express();

app.listen(PORT,"0.0.0.0",() => {
    console.log(`connected at port ${PORT}`);
})