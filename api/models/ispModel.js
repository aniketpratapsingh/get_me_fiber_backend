'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var IspSchema = new Schema({
   name :{
       type : String,
       required: 'Kindly provide name'
   },
   coordinates:{
       type : [{ "lat": Number, "lng": Number }],
       default: []
   }
})

module.exports = mongoose.model('ISP', IspSchema)