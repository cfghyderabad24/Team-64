const mongoose = require('mongoose');

const SchedulesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});

const Schedules = mongoose.model("Events",SchedulesSchema);
module.exports = Schedules;
