const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddleware = require('../middlewares/authMiddleware');
const express = require('express')

const router = express.Router()

//routes

//REGISTER
router.post('/register',registerController)

//LOGIN
router.post('/login',loginController);

//Get current user
router.get('/current-user',authMiddleware,currentUserController)

module.exports = router;