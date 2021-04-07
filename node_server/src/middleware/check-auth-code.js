module.exports = requiredPrivileges => {
  return (req, res, next) => {
    const authCode = req.authCode;
    if (authCode >= requiredPrivileges) {
      next();
    } else res.status(401).end();
  };
};
