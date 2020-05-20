const mongoose = require( "mongoose" )
const Schema = mongoose.Schema

const userSchema = new Schema( {
    username: String,
    pwd: String,
    email: String,
    name: String,
    surname: String,
    phone: String,
    userID: String,
    privilege: String,
    deleted: String
} )

module.exports = mongoose.model( "usersArchive", userSchema )