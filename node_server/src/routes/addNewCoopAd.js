const CoopModel = require( "../../models/coopAd.model" )
const date = require( "../components/getDate" )

module.exports = async( req, res ) => {

  const { title, content, company } = req.body

  const ad = new CoopModel( {
    title,
    content,
    company,
    date: date()
  } )

  const doc = await ad.save()
  if( doc ){
    res.status( 200 )
    res.json( {
      status: "ok"
    } )
  }
  else{
    res.json( {
      status: "fail"
    } )
  }
}