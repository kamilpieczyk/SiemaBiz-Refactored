module.exports = requiredPrivileges => {
  return (req, res, next) => {
    if (
      req.originalUrl === '/login' ||
      req.originalUrl === '/register' ||
      req.originalUrl === '/send-contact-email' ||
      req.originalUrl === '/get-article' ||
      req.originalUrl === '/add-new-article' ||
      req.originalUrl === '/add-new-company'
    ) {
      next();
    } else if (req.headers['authCode'] >= requiredPrivileges) {
      console.log(req.headers);
      next();
    } else {
      console.log(req.headers['authCode']);
      res.status(401).end();
    }
  };
};
