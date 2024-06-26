const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    serviceid :{
        type: Array
    }
});

module.exports = Users;