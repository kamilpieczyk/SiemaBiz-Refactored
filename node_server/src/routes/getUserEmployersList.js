// Imports
const CompanyModel = require('../../models/companyModel')

// Module

module.exports = ( req, res ) => {
    const { user } = req.params
    
    CompanyModel.find({ employees: { $all: [ user ] } })
    .then( doc => {
        
        res.status( 200 )
        res.json({
            companies: doc
        })
    })
}