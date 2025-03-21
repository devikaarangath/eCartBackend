//import mongoose
const mongoose = require('mongoose');

//define schema for products collection to store data
const cartSchema =new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    
        quantity:{
            type:Number,
            required:true,
            
        },
        grandTotal:{
            type:Number,
            required:true,
        },
    
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    rating:{
        rate:{
            type:Number,
        },
        count:{
            type:Number,
        }
    }
})

//create a model to store product details
const carts = new mongoose.model('carts',cartSchema)

//export model
module.exports = carts