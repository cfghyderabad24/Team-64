const User = require('../models/User');
const {jwtAuthMiddleware , generateToken} = require('../configuration/jwtconfig');

const createUser = async (req, res) => {
    try {
        const input = req.body;
        const user = new User(input);
        await user.save();
        res.status(201).send("registered successfully");
        
    } catch (err) {
        console.log("error is" ,err.message);
        res.status(500).send(err.message);
    }
};

const loginUser = async (req, res) => {
    try {
        const input = req.body;
        const user = await User.findOne({ username: input.username });
        
        if (!user || !user.comparePassword(input.password)) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const playload = {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            password: user.password,
            role: user.role,

        };
        const token = generateToken(playload);
        console.log("\n token is" ,token,"\n");
        res.status(200).json({ token });
        
    } catch (err) {
        console.log("error is" ,err.message);
        res.status(500).send(err.message);
    }
};

const getmaindashboard = async (req, res) => {
    try {
        const input = req.body;
        const user = await User.findOne({ username: input.username });
        
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        } else {
            const dashboard = user.dashboard;
            const count = dashboard.reduce((total, item) => {
                const singleCount = item.name_location.split(',').length;
                return total + singleCount;
            }, 0);
            
            console.log("Count is", count);
            res.status(200).json({ count });
        }
    } catch (err) {
        console.log("Error is", err.message);
        res.status(500).send(err.message);
    }
};


module.exports = { createUser,loginUser };
