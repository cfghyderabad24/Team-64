const express = require('express');
const router = express.Router();

//user routes
router.post('/registeration', require('./controllers/UserController').createUser);
router.post('/userlogin', require('./controllers/UserController').loginUser);

//admin routes
router.post('/adminlogin', require('./controllers/AdminController').adminLogin);
router.post('/adminregisteration', require('./controllers/AdminController').adminRegistration);

module.exports = {router};