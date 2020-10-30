// CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppper');
mongoose.Promise = global.Promise;

// //Schema move to User model.js
// var userSchema = mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     email: String,
//     age: Number,
//     status: String,
//     created_date: Date,

// });

// Model
var User = require("./UserModel");

// INSERT
var person = new User({ firstname: 'Seen', lastname: 'Vechprasit', email: 'Seen@olanlab.com ', age: 33, status: "active"});
person.save((err, data) => {
    if(err) console.log(err);
    console.log('saved document successfully : ', data);
})

