const express = require("express");
const app= express();
const mongoose= require("mongoose");
var cors = require('cors');
const bodyparser = require('body-parser')
const path=require("path")
require("dotenv").config();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
const userRouter= require("./routes/userRouter");
mongoose.connect(process.env.DATABASE_URL+process.env.DBNAME);
const PORT=process.env.PORT || 8080;
app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
})
app.use("/userlogin", userRouter);

app.listen(PORT, ()=>{
    console.log("App run at 8000 Port");
})

