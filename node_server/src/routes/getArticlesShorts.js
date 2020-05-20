const articlesModel = require( "../../models/articleModel" )
const assert = require( "assert" )

module.exports = ( req, res ) => {
    articlesModel.find( {}, ( err, doc ) => {
        assert.equal( null, err )
        if( doc ){
            
            const shorts = doc.map( article => ( {
                _id: article._id,
                title: article.title,
                author: article.author,
                date: article.date,
                introduction: article.introduction,
                image: article.mainImage,
                category: article.category
            } ) )

            res.json( shorts )
        }
    } )
}