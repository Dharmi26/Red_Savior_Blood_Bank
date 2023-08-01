const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database ${mongoose.connection.host}`);
    }
    catch(error){
        console.log(`MongoDB Database error ${error}`)
    }
}

module.exports = connectDB