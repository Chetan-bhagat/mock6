const express=require("express");

const app=express();

app.use(express.json());


const {connection}=require('./dbs/config');

const {userroutes}=require('./Routers/user.routes')

const {flightroutes}=require('./Routers/flight.routes')

const {bookingroutes}=require('./Routers/booking.routes')


app.get('/',(req,res)=>{
    res.send("welcome")
});

app.use('/api',userroutes);
app.use('/api',flightroutes);
app.use('/api',bookingroutes)

app.listen(9168,async()=>{
    try{
    await connection;
    console.log("Conneccted to db🎉🎉🎉")
    }catch(err){
        console.log("something went wrong",err)
    }
    console.log("server is running")
})