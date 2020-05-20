require("dotenv").config()

// Imports
const CompanyModel = require('../../models/companyModel')

// Module

module.exports = ( req, res ) => {
    const user = req.params.user
    
    CompanyModel.find({ owners: { $all: [ user ] } })
    .then( doc => {
        
        res.status( 200 )
        res.json({
            companies: doc
        })
    })
}