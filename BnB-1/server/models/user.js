const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
  name: {
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    default: '',
    required: true
  },
  phone: {
    type: Number,
    default: ''
  },
  password: {
    type: String,
    default: '',
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  },
  userType: {
    type: String,
    default: 'End'
  }
});

module.exports = mongoose.model('User', UserSchema);
