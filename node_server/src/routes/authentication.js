const Passport = require('../../models/passportModel');
const User = require('../../models/userModel');

module.exports = async (req, res) => {
  const token = req.body.token;
  try {
    const auth = await Passport.findOne({ token });
    const user = await User.findOne({ username: auth.username });
    if (user) {
      res.status(200).json({
        status: 'authenticated',
        as: user.username,
        username: user.username,
        email: user.email,
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        privileges: user.privilege,
        id: user.id,
      });
    } else {
      res.status(400);
      res.json({
        status: 'authentication failed',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500);
    res.json({
      status: 'authentication failed',
    });
  }
};
