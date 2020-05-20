const CoopAdsModel = require( "../../models/coopAd.model" )

module.exports = async( req, res ) => {
  const { id, title, content } = req.body

  const data = await CoopAdsModel.findByIdAndUpdate( { _id: id }, { $set: {
    title,
    content
  } } )

  if( data ){
    res.status( 200 )
    res.json( {
      status: "ok"
    } )
  }
  else{
    res.status( 200 )
    res.json( {
      status: "fail"
    } )
  }
}