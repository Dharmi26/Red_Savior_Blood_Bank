const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')

//dot config
dotenv.config({path: "./vars/.env"})

//Mongodb connection
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api',require('./routes/testRoutes'));
app.use('/api/auth', require("./routes/authRoutes"))

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT,()=>{
    console.log(`Node server is running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`)
})