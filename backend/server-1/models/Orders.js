const mongoose = require('mongoose');
const ordersSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    price:{
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
});

const Orders = mongoose.model("Orders",ordersSchema);
module.exports = Orders;