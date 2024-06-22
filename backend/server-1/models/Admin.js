const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"admin"
    }
})

adminSchema.pre("save",async function(next){
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

adminSchema.methods.comparePassword = function (password) {
    try{
        return bcrypt.compareSync(password, this.password);
    }
    catch(err){
        return err
    }
}

const Admin = mongoose.model("Admin",adminSchema)
module.exports = Admin