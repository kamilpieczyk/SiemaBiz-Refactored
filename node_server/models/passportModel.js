const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportSchema = new Schema(
  {
    username: String,
    token: String,
    refreshToken: String,
    secret: String,
    privileges: String,
    // expireAt: {
    //   type: Date,
    //   default: Date.now,
    //   index: { expires: 86400000 },
    // },
  },
  { collection: 'passports' }
);

module.exports = mongoose.model('passport', passportSchema);
