require("dotenv").config();

const Cv = require('../../models/cvModel')

module.exports = ( req, res ) => {
    // this function is responsible for making a changes in user's cv
    const body = req.body
    const { username } = req.body

    Cv.findOne({ username })
        .then( data => {
            if( data === null ) Cv.create( body ).then( () => {
                res.status( 200 )
                res.json({
                    status: "ok",
                    msg: "new record has been added"
                })
            })
            else Cv.findOneAndUpdate( { username }, body ).then( () => {
                res.status( 200 )
                res.json({
                    status: "ok",
                    msg: "cv has been updated"
                })
            })
        })
        .catch( err => {
            console.log( err )
            res.status( 500 )
            res.json({
                status: "error",
                msg: "server error"
            })
        } )
}