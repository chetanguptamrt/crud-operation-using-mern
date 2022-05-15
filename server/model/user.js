const mongoose = require("mongoose")
const usreSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    mobile:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    work:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
},{
    timestamps: true
});

const users = mongoose.model("users", usreSchema);

module.exports = users