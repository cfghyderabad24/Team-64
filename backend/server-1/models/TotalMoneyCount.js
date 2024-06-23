const mongoose = require('mongoose');
const TotalMoneyCountSchema = new mongoose.Schema({
    totalMoney:{
        type:Number,
        default:0
    }
    
});

const TotalMoneyCount = mongoose.model("TotalMoneyCount",TotalMoneyCountSchema);
module.exports = TotalMoneyCount;