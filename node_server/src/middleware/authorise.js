const Passport = require('../../models/passportModel');
const jwt = require('jsonwebtoken');
const userModel = require('../../models/userModel');

module.exports = async (req, res, next) => {
  const method = req.method;
  const excludedUrls = [
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/send-contact-email',
    '/get-article',
    '/add-new-article',
    '/add-new-company',
  ];

  if (method == 'GET') next();
  else if (excludedUrls.includes(req.url)) {
    next();
  } else if (method == 'POST') {
    if (!req.headers.authorization)
      res.status(401).json({
        status: 'unauthorised',
      });
    const tokenSplit = req.headers.authorization.split(' ');
    const tokenType = tokenSplit[0].toLowerCase();
    const token = tokenSplit[1];
    let user;
    if (tokenType == 'refresh') {
      console.log('refresh token');
      user = await Passport.findOne({ refreshToken: token });
    } else {
      console.log('bearer');
      user = await Passport.findOne({ token });
    }

    if (user) {
      if (tokenType === 'refresh') {
        jwt.verify(token, user.secret, async (err, decoded) => {
          console.log(`veryfication of Refresh token ${token} for address ${req.url}`);
          if (err) {
            res.status(401).json({
              status: 'invalid refresh token',
              expiredAt: err.expiredAt,
            });
          }

          const newToken = jwt.sign(
            {
              username: user.username,
              privileges: user.privileges,
            },
            user.secret,
            { expiresIn: 600 }
          );

          const updatePassport = await user.updateOne({ token: newToken });
          if (updatePassport) {
            res.status(201).json({
              status: 'new token granted',
              newToken,
            });
          }
        });
      } else {
        jwt.verify(token, user.secret, async (err, decoded) => {
          console.log(`veryfication of Bearer token ${token} for address ${req.url}`);
          if (err) {
            res.status(401).json({
              status: 'token expired',
              expiredAt: err.expiredAt,
            });
          } else {
            // req.setHeader('authCode', user.privileges);
            const getUser = await userModel.findOne({ username: user.username });
            const privilege = getUser.privilege;
            req.headers['authCode'] = privilege;
            req.headers['username'] = getUser.username;
            next();
          }
        });
      }
    } else {
      res.status(401).json({
        status: 'unauthorised',
      });
    }
  }
};
