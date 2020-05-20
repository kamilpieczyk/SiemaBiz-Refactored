// Imports
const CompanyModel = require( "../../models/companyModel" )

// Module

module.exports = async ( req, res ) => {
    const value = req.params.value
    try{
        const query = await CompanyModel.find( { $text: { $search: value } } )
        res.json( {
            companies: query
        } )
    }
    catch( err ){
        console.error( err )
    }
}