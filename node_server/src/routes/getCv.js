const Cv = require( "../../models/cvModel" )

module.exports = ( req, res ) => {
    // this function sends response with user CV 
    // or if users array exists send response with all of the users in array

    const body = req.body
    const { username, users } = body

    const getUserCv = async user => {
        try{
            const cv = await Cv.findOne( { username: user } )
            return cv
        }
        catch( err ){
            console.log( err )
        }
    }

    if( username ){

        Cv.findOne( { username } )
            .then( data => {
                if( data === null ) res.status( 204 )
                else {
                    res.status( 200 )
                    res.json( {
                        status: "ok",
                        data
                    } )
                }
            } )
            .catch( err => console.log( err ) )

    }

    else if( users ){
        const foundCvs = []
        const resolveCV = async() => {
            for( let user of users ){
                const cv = await getUserCv( user )
                foundCvs.push( cv )
            }
        }
        resolveCV().then( () => {
            res.status( 200 )
            res.json( {
                status: "ok",
                applications: foundCvs
            } )
        } )
    }

}