const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//Create Inventory
const createInventoryController = async(req,res) => {
    try{
        const {email,inventoryType} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            throw new Error('User not found');
        }
        if(inventoryType==="in" && user.role!=='donar'){
            throw new Error('Not a Donor Account');
        }
        if(inventoryType==="out" && user.role !== 'hospital'){
            throw new Error('Not a Hospital');
        }
        //save record
        const inventory = new inventoryModel(req.body);
        await inventory.save();
        return res.status(201).send({
            success:true,
            message:'New blood record added',
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in Creating Inventory API',
            error
        })
    }
}

//GET All Blood Records
const getInventoryController = async(req,res) => {
    try{
        const inventory = await inventoryModel
        .find({organisation:req.body.userId})
        .populate('donar')
        .populate('hospital')
        .sort({createdAt:-1});
        
        return res.status(200).send({
            success:true,
            message:'get all inventories successfully',
            inventory,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error In Getting all inventories',
            error
        })
    }
}

module.exports = {createInventoryController, getInventoryController};