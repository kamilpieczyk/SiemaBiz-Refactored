const jobAdModel = require( "../../models/jobAdModel" )

module.exports = async( req, res ) => {
  const { username, jobAdID } = req.body
  const offer = await jobAdModel.findOne({ _id: jobAdID });
  const applications = [ ...offer.applications, username ];
  const edit = await jobAdModel.findOneAndUpdate({ _id: jobAdID }, {
    $set: { applications }
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