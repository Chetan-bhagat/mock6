const express=require('express');
const app=express()
const {userModel}=require('../Models/user');
app.use(express.json());


const userroutes=express.Router();
// ************REGISTER*******
userroutes.post('/register',async(req,res)=>{
    let payload=req.body;
   try{
    let data=await new userModel(payload)
    data.save();
    res.status(201).send({"msg":"Registered Successful"})

   }catch(err){
    res.send({"msg":err})
   }

})

// *********LOGIN*************
userroutes.post('/login',async(req,res)=>{
    let payload=req.body;
    try{
     let data=await userModel.find({"email":payload.email});
     if(data.length!=0){
        res.status(201).send({"msg":"Login Successful"})
     }else{
        res.status(201).send({"msg":"Login again"})
     }
    
 
    }catch(err){
     res.send({"msg":err})
    }

});
// *********ALLREGISTER***************

userroutes.get('/allregister',async(req,res)=>{
 
   try{
    let data=await userModel.find();
    if(data.length!=0){
       res.status(201).send(data)
    }else{
       res.status(201).send({"msg":"Login again"})
    }
   

   }catch(err){
    res.send({"msg":err})
   }

});


module.exports={userroutes}