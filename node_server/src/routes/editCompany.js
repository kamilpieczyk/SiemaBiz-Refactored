const CompanyModel = require( "../../models/companyModel" )

module.exports = ( req, res ) => {
    const body = req.body
    const { name, adress, city, description } = body
    
    const update = {
        city,
        adress,
        description
    }

    CompanyModel.findOneAndUpdate( { name } , update )
      .then( doc => {
          res.status( 200 )
          res.json( {
              status: "ok",
              updated: doc
          } )
      } )

}