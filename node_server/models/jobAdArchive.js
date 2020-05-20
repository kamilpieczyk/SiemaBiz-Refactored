const mongoose = require( "mongoose" )
const Schema = mongoose.Schema

const schema = new Schema( {
    title: String,
    city: String,
    hours: String,
    wages: String,
    industry: String,
    duties: Array,
    requirements: Array,
    description: String,
    company: String,
    applications: Array
} )
schema.index( { title: "text" } )

module.exports = mongoose.model( "jobAdsArchive", schema )