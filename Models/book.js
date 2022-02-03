var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name:String,
    like:Number
})

module.exports = mongoose.model("books",bookSchema)
