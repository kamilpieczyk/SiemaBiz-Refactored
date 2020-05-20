const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportSchema = new Schema({
    username: String,
    passport: String,
    privileges: String
}, { collection: "passports"})

module.exports = mongoose.model( 'passport', passportSchema );