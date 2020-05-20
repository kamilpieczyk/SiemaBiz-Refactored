// Imports
const CompanyModel = require('../../models/companyModel')

// Module

module.exports = async ( req, res ) => {
  const body = req.body;
  const { username, company } = body;

  const myCompany = await CompanyModel.findOne({ _id: company });
  if( myCompany ){
    const { employees } = myCompany;
    employees.push( username );
    const add = await CompanyModel.findOneAndUpdate({ _id: company },{ $set: { employees } });
    if( add ){
      res.status( 200 ).json({
        status: 'ok',
        added: add
      });
    }
    else{
      res.status( 500 ).json({
        status: 'error',
      })
    }
  }
}