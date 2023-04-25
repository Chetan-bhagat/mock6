const mongoose=require("mongoose")

const bookingSchema=mongoose.Schema({
    user : { type: "string", ref: 'User' },
    flight : { type: "string", ref: 'Flight' }
});

const bookingModel=mongoose.model('booking',bookingSchema);

module.exports={bookingModel}