const express = require('express')

//rest object
const app = express()

//routes
//1 test route
app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Welcome to Blood Bank App',
    })
})

//port
const PORT = 3000

//listen
app.listen(PORT,()=>{
    console.log("Server is up 🚀")
})