const hash = require('hash-generator');
const User = require('../../models/userModel');
const assert = require('assert');
const bcrypt = require('bcrypt');
const Passport = require('../../models/passportModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const body = req.body;
  console.log('achived request from user ' + body.username);

  try {
    const user = await User.findOne({ username: body.username });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(body.password, user.pwd);
      if (isPasswordCorrect) {
        const secret = user._id + ':' + hash(20);
        const refreshToken = jwt.sign({ username: user.username, privileges: user.privileges }, secret, {
          expiresIn: '24h',
        });
        const token = jwt.sign({ username: user.username, privileges: user.privileges }, secret, {
          expiresIn: '1h',
        });
        const passport = new Passport({
          username: user.username,
          token: token,
          refreshToken: refreshToken,
          secret: secret,
          privileges: user.privileges,
        });
        await passport.save();
        res.status(200).json({
          status: 'logged',
          token,
          refreshToken,
          privileges: user.privileges,
        });
      } else {
        res.status(401).json({ status: 'wrong_pwd' });
      }
    } else {
      const err = new Error('user_not_exisit');
      err.name = 'userError';
      throw err;
    }
  } catch (err) {
    if (err.name === 'userError') {
      res.status(401).json({ status: err.message });
    } else res.status(500).json({ status: err.message });
  }

  // User.findOne( { username: body.username }, ( err, doc ) => {
  // 	assert.equal( err, null )

  // 	if ( doc ) {
  // 		bcrypt.compare( body.password, doc.pwd, ( err, bool ) => {
  // 			assert.equal( err, null )

  // 			if ( bool ) {
  // 				const passport = hash( 20 )
  // 				Passport.findOneAndUpdate(
  // 					{ username: body.username },
  // 					{ $set: { passport, privileges: doc.privilege } }
  // 				).then( data => {

  // 					if ( data ) {
  // 						res.status( 200 )
  // 						res.json( {
  // 							status: "logged",
  // 							passport,
  // 						} )
  // 					} else {
  // 						const newPassport = new Passport( {
  // 							username: doc.username,
  // 							passport,
  // 							privileges: doc.privilege
  // 						} )
  // 						newPassport.save().then( () => {
  // 							res.status( 200 )
  // 							res.json( {
  // 								status: "logged",
  // 								passport,
  // 								privileges: doc.privilege
  // 							} )
  // 						} )
  // 					}
  // 				} )
  // 			} else {
  // 				res.status( 200 )
  // 				res.json( {
  // 					status: "wrong_pwd"
  // 				} )
  // 			}
  // 		} )
  // 	} else {
  // 		res.status( 200 )
  // 		res.json( {
  // 			status: "user_not_exisit"
  // 		} )
  // 	}
  // } )
};
