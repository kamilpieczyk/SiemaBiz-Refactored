const Passport = require('../../models/passportModel')
const assert = require('assert')
require("dotenv").config()

module.exports = ( req, res ) => {
    const passport = req.body.passport;

    Passport.findOneAndDelete({ passport })
        .then( doc => {
            console.log(`user ${ doc.username } has been succesfully logget out`);
            res.status(200);
            res.json({
                status: 'logged_out',
            })
        } )

}