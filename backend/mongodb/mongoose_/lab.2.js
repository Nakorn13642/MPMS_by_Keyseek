// CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppper');
mongoose.Promise = global.Promise;

// Model
var User = require("./UserModel");
// UPDATE
// 1
// User.findByIdAndUpdate('5f895de49eafff2aa0f30aa0', {age: 20}, {new: false},(err, data) => {
//     if(err) console.log(err);
//     console.log('User.findByIdAndUpdate | ', data);
// })

// 2 
User.findOneAndUpdate({firstname: 'SeenUPSERT'}, {age: 14}, {new: true, upsert: true}, (err, data) => {
    if(err) console.log(err);
    console.log('User.findOneAndUpdate | ', data);
});


