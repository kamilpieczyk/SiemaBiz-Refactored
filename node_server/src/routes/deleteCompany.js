const CompanyModel = require( "../../models/companyModel" )
const fs = require( "fs" )
const path = require( "path" )

module.exports = ( req, res ) => {
  const body = req.body
  const { id, logo } = body

  const pathToFile = path.join( __dirname, "../..", "uploads", "logos",`${ logo }` )

  CompanyModel.findOneAndDelete( { _id: id } )
    .then( doc => {
      res.status( 200 )
      res.json( {
        status: "deleted",
        company: doc
      } )
    } )

    .then( () => {
      fs.unlink( pathToFile, err => console.log( err ) )
    } )

}