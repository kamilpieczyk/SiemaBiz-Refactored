const Passport = require('../../models/passportModel');
const User = require('../../models/userModel');
const assert = require('assert');
require('dotenv').config();

module.exports = (req, res) => {
  const passport = req.body.passport;

  Passport.findOne({ passport })
    .then(doc => {
      if (doc) {
        User.findOne({ username: doc.username }).then(user => {
          res.status(200);
          res.json({
            status: 'authorised',
            as: user.username,
            username: user.username,
            email: user.email,
            name: user.name,
            surname: user.surname,
            phone: user.phone,
            privileges: user.privilege,
            id: user.id,
          });
        });
      } else {
        res.status(400);
        res.json({
          status: 'authorisation_failed',
        });
      }
    })
    .catch(err => assert.equal(err, null));
};
