require( "dotenv" ).config()
const Article = require( "../../models/articleModel" )

module.exports = ( req, res ) => {
    const body = req.body

    Article.updateOne( { _id: body.id }, {
        $set:{
            title: body.title,
            introduction: body.introduction,
            sections: body.sections,
            category: body.category
        }
    } )
    .then( () => {
        res.status( 200 )
        res.json( {
            status: "ok"
        } )
    } )
    .catch( err => {
        res.status( 500 )
        res.json( {
            status: "error",
            err
        } )
    } )
}