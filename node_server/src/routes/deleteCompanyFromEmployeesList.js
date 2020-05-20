// Imports
const CompanyModel = require('../../models/companyModel')

// Module

module.exports = async ( req, res ) => {
    const body = req.body
    const { username, company } = body

    const myCompany = await CompanyModel.findOne({ _id: company })
    if( myCompany ){
        const { employees } = myCompany
        const index = employees.indexOf( username )
        const deletedEl = employees.splice( index, 1 )

        const update = await CompanyModel.findOneAndUpdate( { _id: company }, { $set: { employees } } )

        if( update ){
            
            res.status( 200 )
            res.json({
                status: 'ok',
                item: deletedEl
            })

        }

        else{

            res.status( 200 )
            res.json({
                status: 'error',
            })

        }
    }
    
}