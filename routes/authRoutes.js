const { registerController, loginController } = require("../controllers/authController");

const express = require('express')

const router = express.Router()

//routes

//REGISTER
router.post('/register',registerController)

//LOGIN
router.post('/login',loginController);

module.exports = router;