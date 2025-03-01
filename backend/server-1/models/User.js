const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    orders: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Orders'
    }],
    donations: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Donations'
    }],
    dashboard: [{
        order_id: {
            type: String,
            required: true
        },

        name_location: [{
            type: String,
            required: true
        }]
    }]
});

userSchema.pre("save",async function(next){
    const person = this
    if(!person.isModified("password")){
        return next()
    }
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(person.password,salt)
        person.password = hashedPassword
        next()
    }
    catch(err){
        next(err)
    }
})

userSchema.methods.comparePassword = function (password) {
    try{
        return bcrypt.compareSync(password, this.password);
    }
    catch(err){
        return err
    }
};


const User = mongoose.model("User",userSchema)
module.exports = User