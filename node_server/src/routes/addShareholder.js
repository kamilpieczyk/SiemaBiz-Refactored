// Imports
const CompanyModel = require('../../models/companyModel')

// Module

module.exports = async ( req, res ) => {
    const username = req.body.username
    const company = req.body.company
    
    const findCompany = await CompanyModel.findOne({ name: company })
    const employees = findCompany.employees
    const owners = findCompany.owners
    const index = employees.indexOf( username )
    
    employees.splice( index, 1 )
    await CompanyModel.findOneAndUpdate( { name: company }, { employees } )
    owners.push( username )
    const updateOwners = await CompanyModel.findOneAndUpdate( { name: company }, { owners } )
    
    if( updateOwners ){
        res.status( 200 )
        res.json({
            status: 'ok'
        })
    }
    else{
        res.status( 200 )
        res.json({
            status: 'error'
        })
    }
}