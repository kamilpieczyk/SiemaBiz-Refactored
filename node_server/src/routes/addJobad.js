const jobAdModel = require( "../../models/jobAdModel" )

module.exports = async( req, res ) => {
  const {
    title,
    city,
    hours,
    wages,
    industry,
    duties,
    requirements,
    description,
    companyID,
  } = req.body

  const newDate = new Date();
  const date = `${ newDate.getDate() }.${ newDate.getMonth()+1 }.${ newDate.getUTCFullYear() }`;

  const jobAd = new jobAdModel( {
    title,
    city,
    hours,
    wages,
    date,
    industry,
    duties: duties.split( "," ),
    requirements: requirements.split( "," ),
    description,
    companyID,
    applications: []
  } )

  const saveJobAd = await jobAd.save()

  if( saveJobAd ){
    res.status( 200 )
    res.json( {
      status: "ok"
    } )
  }
  else{
    res.status( 504 )
    res.json( {
      status: "error"
    } )
  }
}