const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  phoneNumber:{
    type: Number,
    limit: 11,
    required: true
  },
  address:{
    type: String,
    required: true
  },
});

module.exports = mongoose.model('user', UserSchema);
