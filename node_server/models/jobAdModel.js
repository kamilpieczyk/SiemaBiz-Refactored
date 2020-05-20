const mongoose = require( "mongoose" )
const Schema = mongoose.Schema

const schema = new Schema( {
    title: String,
    city: String,
    hours: String,
    wages: String,
    industry: String,
    date: String,
    duties: Array,
    requirements: Array,
    description: String,
    companyID: String,
    applications: Array
} )
schema.index( { title: "text" } )

module.exports = mongoose.model( "jobad", schema )