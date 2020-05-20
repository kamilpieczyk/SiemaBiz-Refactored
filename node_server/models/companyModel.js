const mongoose = require( "mongoose" )
const Schema = mongoose.Schema

const schema = new Schema( {
    name: String,
    industry: String,
    logo: String,
    adress: String,
    city: String,
    description: String,
    owners: Array,
    employees: Array,
} )
schema.index( { name: "text" } )

module.exports = mongoose.model( "company", schema )