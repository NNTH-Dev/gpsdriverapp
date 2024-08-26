const mongoose = require('mongoose');

const { Schema } = mongoose;

const AccountSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    requried: true
  }
});

module.exports = mongoose.model('account', AccountSchema);