const express=require("express");
const app=express();

const mongoose=require("mongoose");

const PORT=9000;

const stuRoute=require("./routes/studentRoutes");
const empRoute=require("./routes/employeeRoute");
const cors=require("cors");
const bodyParser = require("body-parser");

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase").then(()=>{
    console.log("Database connected")
})

//body-parser middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.use("/students",stuRoute);
app.use("/employee",empRoute);



app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})