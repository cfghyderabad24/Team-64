const User = require('../models/User');
import { get } from './../../server-2/node_modules/mongodb/src/utils';
const  {jwtDecode} = require('jwt-decode');
const Donations = require('../models/Donations');
const Orders = require('../models/Orders');
const Products = require('../models/Products');
const {jwtSecret} = process.env.JWT_SECRET;

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
//------------------------------------------------------------------------------------------------
//dashboard changes and buying and selling of products
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

//-----------------------------------------------------------------
//buying and donation of the user 

const buyProduct = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        
        jwt.verify(token, jwtSecret);

        const decoded = jwtDecode(token);
        const username = decoded.username;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const { price, pads, cups } = req.body;
        if (!price || pads == null || cups == null) {
            return res.status(400).json({ error: 'Invalid input data' });
        }

        const order = new Orders({
            user: user._id,
            price,
            pads,
            cups
        });
        await order.save();

        // Update user's orders array
        user.orders.push(order._id);
        await user.save();

        res.status(201).send({order});
    } catch (err) {
        console.log("Error is", err.message);
        res.status(500).send(err.message);
    }
};

//donating the product for the others

const donateProduct = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        
        jwt.verify(token, jwtSecret);

        const decoded = jwtDecode(token);
        const username = decoded.username;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const { amount, location, pads, cups, member  } = req.body;
        if (pads == null || cups == null || member == null || !location || !amount) {
            return res.status(400).json({ error: 'Invalid input data' });
        }

        const donation = new Donations({
            user: user._id,
            amount,
            location,
            pads,
            cups,
            member
        });
        await donation.save();

        // Update user's donations array
        user.donations.push(donation._id);
        await user.save();

        res.status(201).send({donation});
    } catch (err) {
        console.log("Error is", err.message);
        res.status(500).send(err.message);
    }
};

//displaying the total number of donations donar has done

const getAllDonations = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        
        jwt.verify(token, jwtSecret);

        const decoded = jwtDecode(token);
        const username = decoded.username;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const donations = await Donations.find({ user: user._id });
        res.status(200).send({ donations });
    } catch (err) {
        console.log("Error is", err.message);
        res.status(500).send(err.message);
    }
};

const getAllOrders = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        
        jwt.verify(token, jwtSecret);

        const decoded = jwtDecode(token);
        const username = decoded.username;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const orders = await Orders.find({ user: user._id });
        res.status(200).send({ orders });

    } catch (err) {

        console.log("Error is", err.message);
        res.status(500).send(err.message);

    }
};

//to get only one specif Donation details
const donationDetails = async (req, res) => {
    try{

        const id = req.params.id;
        const donation = await Donations.findById(id);
        if(!donation){
            return res.status(404).send("Donation not found");
        }
        res.status(200).send({donation});
    }
    catch(err){
        console.log("Error is", err.message);
        res.status(500).send(err.message);
    }
};

//to get the specific order details for invoice

const orderInvoice = async (req, res) => {
    try{

        const id = req.params.id;
        const order = await Orders.findById(id);
        if(!order){
            return res.status(404).send("Order not found");
        }
        res.status(200).send({order});
    }
    catch(err){
        console.log("Error is", err.message);
        res.status(500).send(err.message);
    }
};

//to get the specific donation details

const donationInvoice = async (req, res) => {
    try{

        const id = req.params.id;
        const donation = await Donations.findById(id);
        if(!donation){
            return res.status(404).send("Donation not found");
        }
        res.status(200).send({donation});
    }
    catch(err){
        console.log("Error is", err.message);
        res.status(500).send(err.message);
    }
};  



module.exports = { createUser,loginUser, getmaindashboard, buyProduct , donateProduct, getAllDonations, getAllOrders, donationDetails, orderInvoice, donationInvoice};
