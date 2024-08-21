const empModel=require("../model/employeeModel");

const empSave=async(req,res)=>{
     const mydata=req.body;
     const myres=await empModel.create(mydata);

    //  or 
    //  const [fname,lname,email,city,contact,password]=req.body;
    //  const myres=await empModel.create({
    //     fname:fname,
    //     lname:lname,
    //     email:email,
    //     city:city,
    //     contact:contact,
    //     password:password
    //  })

     res.status(200).json(myres);
}

const empCheck=async(req,res)=>{
     const {email,password}=req.body;
     const User=await empModel.findOne({email:email});
     if(!User)
     {
        res.json({msg:"Email does not exist"})
     }
     else{
        if(User.password==password)
        {
            res.status(200).json(User);
        }
        else{
            res.json({msg:"password does not match"});
        }
     }
}


module.exports={
    empSave,
    empCheck
}