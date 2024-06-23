const mongoose = require('mongoose');
const donationsSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        default:"random location"
    },
    pads:{
        type:Number,
        default:0

    },
    cups:{
        type:Number,
        default:0

    },
    member:{
        type: Number,
        default:0
    }
});

const Donations = mongoose.model("Donations",donationsSchema);
module.exports = Donations;