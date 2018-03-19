'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// new instance of mongoose.schema, which takes an object that shows the shape of a database entry
var MessageSchema = new Schema({
    day: String,
    month: String,
    dayNum: String,
    year: String,
    message: String,
    amount: Number
})

module.exports = mongoose.model('')