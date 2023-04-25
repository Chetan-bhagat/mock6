const express=require('express');
const app=express();
const {bookingModel}=require('../Models/booking');
const {flightModel}=require('../Models/fligth');
const {userModel}=require('../Models/user');
const { all } = require('proxy-addr');

app.use(express.json());


const bookingroutes=express.Router();

// *******Book flight************
bookingroutes.post('/booking',async(req,res)=>{
   let payload=req.body
   console.log(payload)
    try{
      
        let data=await new bookingModel(payload);
        data.save()
            
           res.status(201).send({"msg":"Booked Flight successful"})
       
       }catch(err){
        res.send({"msg":err})
       }

});

// *******Booked Dashboard************
bookingroutes.get('/dashboard',async(req,res)=>{
 
    try{
      let alldata=[]
        let data=await bookingModel.find();
        if(data.length==0 ){
           res.status(200).send({"msg":"No booked flight ye"})
        }else{
         for( let i=0;i<data.length;i++){
            let user=await userModel.find({"id":data[i].user});
            let flight=await flightModel.find({"id":data[i].flight});
          if(user.length!==0 && flight.length!=0){
            alldata.push({"userDetails":user[0],
            "flightDetails":flight[0]});
          }
           
         }
           res.status(201).send(alldata)
        }
       
    
       }catch(err){
        res.send({"msg":err})
       }

})


module.exports={bookingroutes}