const express = require('express');
const Register = require('../Controller/User/Register/register');
const Login = require('../Controller/User/Login/login');
const authenticateToken = require('../middlewares/verifytoken');
const Profile = require('../Controller/User/Profile/Profile');
const router = express.Router()

router.get('/profile',authenticateToken,Profile);
router.post('/login',Login);
router.post('/register',Register);

module.exports = router