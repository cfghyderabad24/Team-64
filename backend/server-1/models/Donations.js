const mongoose = require('mongoose');
const donationsSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    pads:{
        type:Number,
        required:true
    },
    cups:{
        type:Number,
        required:true
    },
    member:{
        type: Number,
        required: true
    }
});

const Donations = mongoose.model("Donations",donationsSchema);
module.exports = Donations;