const express =require("express");
const authRouter = require('./routes/auth');
const PORT = 3000;
const app = express();

//Middleware Use TO communicate Data
app.use(authRouter);

app.listen(PORT,"0.0.0.0",() => {
    console.log(`connected at port ${PORT}`);
})