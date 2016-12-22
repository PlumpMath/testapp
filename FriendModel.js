var mongoose = require('mongoose');
var Friend = mongoose.Schema;

var friendSchema = new Friend({
  name: {type: String},
  newFriend: {type: String}
});

var nFriend = mongoose.model("FriendCollection", friendSchema);
module.exports = nFriend;