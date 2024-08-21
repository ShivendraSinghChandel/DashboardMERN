const express=require("express");
const route=express.Router();
const empController=require("../controller/employeeController");

route.post("/usersave",empController.empSave);

route.post("/usercheck",empController.empCheck);


module.exports=route;