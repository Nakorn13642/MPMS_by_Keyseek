// CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppper');
mongoose.Promise = global.Promise;

// Model
var User = require("./UserModel");
// FIND
// 1 
// User.findById('5f8578650a2f4dbf473d7e2d', (err, data) => {
//     if(err) console.log(err);
//     console.log('User.findById | ' , data);
// })

// 2
// User.findOne({$or : [{status : "pending"}, {status : "pending"}]}, (err, data) => {
//     if(err) console.log(err);
//     console.log('User.findOne | ' , data);
// })

// 3 
// User.find
// User.find({}, (err, data) => {
//     if(err) console.log(err);
//     console.log('User.findOne | ' , data);
// })
User.find().where('age').in([33, 18]).exec((err, data) => {
    if(err) console.log(err);
    console.log(data);
});