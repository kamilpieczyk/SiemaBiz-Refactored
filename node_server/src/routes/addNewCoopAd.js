const CoopModel = require( "../../models/coopAd.model" )
const date = require( "../components/getDate" )

module.exports = async( req, res ) => {

  const { title, content, company, industry } = req.body

  const ad = new CoopModel({
    title,
    content,
    company,
    industry,
    date: date()
  })

  const doc = await ad.save()
  if(doc){
    res.status(200).json({
      status: "ok"
    })
  }
  else{
    res.status(500).json({
      status: "error"
    })
  }
}