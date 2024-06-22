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
        price: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        pads: {
            type: Number,
            required: true
        },
        cups: {
            type: Number,
            required: true
        }
    }],
    donations: [{
        amount: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        pads: {
            type: Number,
            required: true
        },
        cups: {
            type: Number,
            required: true
        },
        member: {
            type: Number,
            required: true
        }
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