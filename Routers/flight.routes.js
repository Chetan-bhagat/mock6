const express=require('express');
const app=express()
const {flightModel}=require('../Models/fligth');
app.use(express.json());


const flightroutes=express.Router();

// *******FLIGHT GET************
flightroutes.get('/flights',async(req,res)=>{
    try{
        let data=await flightModel.find();
        if(data.length==0){
           res.status(201).send({"msg":"Yet no flight available"})
        }else{
           res.status(201).send(data)
        }
       
    
       }catch(err){
        res.send({"msg":err})
       }

})

// *******FLIGHT GET BY ID************
flightroutes.get('/flights/:id',async(req,res)=>{
    let id=req.params.id;
    console.log(id)
    try{
        let data=await flightModel.find({"id":id});
        if(data.length==0 ){
           res.status(201).send({"msg":"No flight with given"})
        }else{
           res.status(201).send(data)
        }
       
    
       }catch(err){
        res.send({"msg":err})
       }

})
// *******FLIGHT ADD************
flightroutes.post('/flights',async(req,res)=>{
    let payload=req.body;
    console.log(payload)
    try{
        let data=await new flightModel(payload);
        data.save()
        res.status(201).send({"msg":"Flight added"})
    
       }catch(err){
        res.send({"msg":err})
       }

});
// *******FLIGHT UPDTAE************
flightroutes.patch('/flights/:id',async(req,res)=>{
    let id=req.params.id;
    let payload=req.body;
    console.log(id,payload)
    try{
       await  flightModel.updateOne({'id':id},{payload});
        res.status(201).send({"msg":"Flight update"})
    
       }catch(err){
        res.send({"msg":err})
       }

})
// *******FLIGHT DELETE************

flightroutes.patch('/flights/:id',async(req,res)=>{
    let id=req.params.id;
   
    try{
       await  flightModel.deleteOne({'id':id});
        res.status(201).send({"msg":"Flight deleted"})
    
       }catch(err){
        res.send({"msg":err})
       }

})
module.exports={flightroutes}