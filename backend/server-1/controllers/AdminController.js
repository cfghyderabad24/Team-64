const Admin = require('../models/Admin');
const User = require('../models/User');
const {jwtAuthMiddleware , generateToken} = require('../configuration/jwtconfig');


const adminLogin = async (req, res) => {
    try {
        const input = req.body;
        const admin = await Admin.findOne({ username: input.username });
        
        if (!admin || !admin.comparePassword(input.password)) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const playload = {
            username: admin.username,
            password: admin.password,
            role: admin.role

        };
        const token = generateToken(playload);
        console.log("\n token is" ,token,"\n");
        res.status(200).json({ token });
        
    } catch (err) {
        console.log("error is" ,err.message);
        res.status(500).send(err.message);
    }
}

const adminRegistration = async (req, res) => {
    try {
        const input = req.body;
        const admin = new Admin(input);
        const saved = await admin.save();
        res.status(201).send("registered successfully");
    } catch (err) {
        console.log("error is" ,err.message);
        res.status(500).send(err.message);
    }
}

module.exports = { adminLogin, adminRegistration };