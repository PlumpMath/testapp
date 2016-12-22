var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String},
  email: {type: String},
  phone: {type: Number},
  age: {type: Number},
  friends: [],
});

var User = mongoose.model("UserCollection", userSchema);
module.exports = User;