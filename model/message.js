'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// new instance of mongoose.schema, takes an object showing  db entry format
var MessageSchema = new Schema({
    day: String,
    month: String,
    dayNum: String,
    year: String,
    message: String,
    amount: Number
})

module.exports = mongoose.model('Message, MessageSchema');