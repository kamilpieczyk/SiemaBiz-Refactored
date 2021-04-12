const Passport = require('../../models/passportModel');

module.exports = async (req, res, next) => {
  const method = req.method;

  if (method == 'GET') next();
  else if (method == 'POST') {
    if (
      req.originalUrl === '/login' ||
      req.originalUrl === '/register' ||
      req.originalUrl === '/send-contact-email' ||
      req.originalUrl === '/get-article' ||
      req.originalUrl === '/add-new-article' ||
      req.originalUrl === '/add-new-company'
    ) {
      next();
    } else if (!req.headers.authorisation) {
      res.status(401).json({
        status: 'unauthorised',
      });
    } else {
      const bearer = req.headers.authorisation.split(' ');
      const authorisationPass = bearer[1];
      const user = await Passport.findOne({ passport: authorisationPass });
      req.authCode = user.privileges;
      next();
    }
  }
};
