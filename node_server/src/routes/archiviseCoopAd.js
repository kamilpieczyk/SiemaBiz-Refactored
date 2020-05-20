const CoopAdsModel = require( "../../models/coopAd.model" )
const CoopAdsArchiveModel = require( "../../models/coopAdArchive.model" )
const getDate = require( "../components/getDate" )

module.exports = async( req, res ) => {
  const { id } = req.body

  const data = await CoopAdsModel.findOneAndDelete( { _id: id } )

  if( data ){
    const elementToArchive = new CoopAdsArchiveModel( {
      title: data.title,
      content: data.content,
      company: data.company,
      date: data.date,
      archiveDate: getDate()
    } )
    const archive = await elementToArchive.save()
    if( archive ){
      console.log( "archived" )
      res.status( 200 )
      res.json( {
        status: "ok"
      } )
    }
    else{
      console.log( "deleted, but not archivised" )
      res.status( 200 )
      res.json( {
        status: "deleted"
      } )
    }
  }
  else{
    res.status( 200 )
    res.json( {
      status: "fail"
    } )
  }
}