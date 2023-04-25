const mongoose=require("mongoose")

const flightschema=mongoose.Schema({
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: String,
  arrivalTime: String,
  seats: Number,
  price: Number
});

const flightModel=mongoose.model('flights',flightschema);

module.exports={flightModel}