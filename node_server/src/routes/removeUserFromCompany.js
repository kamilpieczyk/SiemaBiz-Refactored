// Imports
const CompanyModel = require( "../../models/companyModel" )

// Module

module.exports = async ( req, res ) => {
    const username = req.body.username
    const company = req.body.company
    
    const findCompany = await CompanyModel.findOne( { name: company } )
    const employees = findCompany.employees
    const index = employees.indexOf( username )
    
    employees.splice( index, 1 )
    const update = await CompanyModel.findOneAndUpdate( { name: company }, { employees } )
    
    if( update ){
        res.status( 200 )
        res.json( {
            status: "deleted"
        } )
    }
    else{
        res.status( 200 )
        res.json( {
            status: "error"
        } )
    }
}