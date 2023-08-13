const express = require('express');
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//routes
//ADD Inventory
router.post('/create-inventory',authMiddleware, createInventoryController);

//Get All Blood Records
router.get('/get-inventory', authMiddleware, getInventoryController);

module.exports = router;