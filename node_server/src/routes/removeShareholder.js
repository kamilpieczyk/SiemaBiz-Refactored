// Imports
const CompanyModel = require( "../../models/companyModel" )

// Module

module.exports = async ( req, res ) => {
    const username = req.body.username
    const company = req.body.company
    
    const findCompany = await CompanyModel.findOne( { name: company } )
    const employees = findCompany.employees
    const owners = findCompany.owners
    const index = employees.indexOf( username )
    
    owners.splice( index, 1 )
    await CompanyModel.findOneAndUpdate( { name: company }, { owners } )
    employees.push( username )
    const updateOwners = await CompanyModel.findOneAndUpdate( { name: company }, { employees } )
    
    if( updateOwners ){
        res.status( 200 )
        res.json( {
            status: "removed"
        } )
    }
    else{
        res.status( 200 )
        res.json( {
            status: "error"
        } )
    }
}