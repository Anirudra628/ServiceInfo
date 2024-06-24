const mongoose = require('mongoose');

const Services = new mongoose.Schema({
  title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    moredesc:{
        type: String,
        required : true,
    },
    duration:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }

});

module.exports = Services;