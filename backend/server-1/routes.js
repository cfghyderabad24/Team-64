const express = require('express');
const router = express.Router();

//user routes
router.post('/registeration', require('./controllers/UserController').createUser);
router.post('/userlogin', require('./controllers/UserController').loginUser);
//dashboard changes and buying and selling of products
router.post('/dashboardcount', require('./controllers/UserController').getmaindashboard);
router.post('/buyproduct', require('./controllers/UserController').buyProduct);
router.post('/donateproduct', require('./controllers/UserController').donateProduct);


//admin routes
router.post('/adminlogin', require('./controllers/AdminController').adminLogin);
router.post('/adminregisteration', require('./controllers/AdminController').adminRegistration);

module.exports = {router};