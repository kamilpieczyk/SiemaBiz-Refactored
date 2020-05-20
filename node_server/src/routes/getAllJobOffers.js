const jobAdModel = require( "../../models/jobAdModel" )

module.exports = async ( req, res ) => {
  const { industry } = req.params;
  let offers;

  if( industry ) offers = await jobAdModel.find({ industry });
  else offers = await jobAdModel.find( {} );

  res.status( 200 ).json([ ...offers ]);
}