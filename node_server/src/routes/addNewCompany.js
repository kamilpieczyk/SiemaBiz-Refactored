require( "dotenv" ).config()

const CompanyModel = require( "../../models/companyModel" )

module.exports = async ( req, res ) => {
  const body = req.body
  const { name, industry, adress, city, description, owners, employees, editMode, editId } = body

  if( editMode ){
    if( req.file ) await CompanyModel.findOneAndUpdate( { _id: editId }, { $set: { logo: req.file.filename } } )
    const edit = await CompanyModel.findOneAndUpdate( { _id: editId }, {
      $set: {
        name,
        industry,
        adress,
        city,
        description,
      }
    } )
    if( edit ){
      res.status( 200 ).json( {
          status: "ok"
      } )
    }
    else{
      res.status( 500 ).json( {
        status: "error"
      } )
    }
  }

  else{
    const company = new CompanyModel( {
      name,
      industry,
      logo: req.file.filename,
      adress,
      city,
      description,
      owners,
      employees
    } )
    
    company.save()
      .then( () => {
        res.status( 200 ).json( {
          status: "ok"
        } )
      } )
      .catch( err => {
        res.status( 500 ).json( {
          status: "fail"
        } )
      } )
  }
}