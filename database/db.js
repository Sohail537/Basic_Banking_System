const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const conn = ()=>{
    mongoose.connect(`mongodb+srv://Sohail:20031A0537@cluster0.exlio9d.mongodb.net/?retryWrites=true&w=majority`).then(()=> {
        console.log("DATABASE CONNECTED");
    }).catch((err) =>{
        console.log(err)
    })
}

module.exports = conn;