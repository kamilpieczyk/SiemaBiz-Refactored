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
    } else if (req.authCode >= requiredPrivileges) {
      next();
    } else res.status(401).end();
  };
};
