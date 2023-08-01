const { registerController } = require("../controllers/authController");

const express = require('express')

const router = express.Router()

//routes
router.post('/register',registerController)

module.exports = router;