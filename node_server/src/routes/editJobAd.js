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
    jobAdID
  } = req.body

  const edit = await jobAdModel.findOneAndUpdate( { _id: jobAdID }, {
    $set: {
      title,
      city,
      hours,
      wages,
      industry,
      duties: duties.split( "," ),
      requirements: requirements.split( "," ),
      description,
    }
  } )

    if( edit ){
      res.status( 200 ).json( {
        status: "ok"
      } )
    }
    else{
      res.status( 504 ).json( {
          status: "error"
      } )
    }
}