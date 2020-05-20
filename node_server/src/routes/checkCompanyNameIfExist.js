// Imports
const CompanyModel = require('../../models/companyModel')

// Module

module.exports = async ( req, res ) => {
    const company = req.params.company

    const dbRecord = await CompanyModel.findOne({ name: company })
    res.status( 200 )

    if( dbRecord ){
        
        res.json({
            status: "exist"
        })

    }

    else{
        res.json({
            status: "ok"
        })
    }
}