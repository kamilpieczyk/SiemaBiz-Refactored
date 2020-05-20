const hash = require( "hash-generator" )
const User = require( "../../models/userModel" )
const assert = require( "assert" )
const bcrypt = require( "bcrypt" )
const Passport = require( "../../models/passportModel" )
require( "dotenv" ).config()

module.exports = ( req, res ) => {
	const body = req.body
	console.log( "achived request from user " + body.username )

	User.findOne( { username: body.username }, ( err, doc ) => {
		assert.equal( err, null )

		if ( doc ) {
			bcrypt.compare( body.password, doc.pwd, ( err, bool ) => {
				assert.equal( err, null )

				if ( bool ) {
					const passport = hash( 20 )
					Passport.findOneAndUpdate(
						{ username: body.username },
						{ $set: { passport, privileges: doc.privilege } }
					).then( data => {
						
						if ( data ) {
							res.status( 200 )
							res.json( {
								status: "logged",
								passport,
							} )
						} else {
							const newPassport = new Passport( {
								username: doc.username,
								passport,
								privileges: doc.privilege
							} )
							newPassport.save().then( () => {
								res.status( 200 )
								res.json( {
									status: "logged",
									passport,
									privileges: doc.privilege
								} )
							} )
						}
					} )
				} else {
					res.status( 200 )
					res.json( {
						status: "wrong_pwd"
					} )
				}
			} )
		} else {
			res.status( 200 )
			res.json( {
				status: "user_not_exisit"
			} )
		}
	} )
}