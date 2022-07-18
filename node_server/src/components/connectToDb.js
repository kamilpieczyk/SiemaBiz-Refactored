const assert = require('assert');
const env = require('dotenv');
const mongoose = require('mongoose');
env.config();

module.exports = callback => {
  mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true })
    .then(data => {
      console.log('succesfully conected to the database');
      callback(mongoose.connection.close);
    })
    .catch(err => console.log(err));
};
