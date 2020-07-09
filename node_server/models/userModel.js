const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  pwd: String,
  email: String,
  name: String,
  surname: String,
  phone: String,
  privilege: String,
  emailApproved: Boolean,
});

module.exports = mongoose.model('user', userSchema);
