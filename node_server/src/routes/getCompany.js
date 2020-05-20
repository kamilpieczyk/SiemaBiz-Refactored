require( "dotenv" ).config()

// Imports
const CompanyModel = require( "../../models/companyModel" )

// Module

module.exports = ( req, res ) => {
    const id = req.params.company
    
    console.log( id )

    CompanyModel.findById( id )
    .then( doc => {
        
        res.status( 200 )
        res.json( {
            company: doc
        } )
        
    } )
}