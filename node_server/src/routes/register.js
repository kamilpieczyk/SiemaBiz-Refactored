const bcrypt = require('bcrypt');
const User = require('../../models/userModel');
const env = require('dotenv');
const privileges = require('../components/privileges');
const sendEmail = require('../components/sendMail');
const welcomeMessange = require('../components/welcomeMessage');
env.config();

module.exports = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const body = req.body;

  const user = new User({
    username: body.username,
    pwd: bcrypt.hashSync(body.password, salt),
    email: body.email,
    name: '',
    surname: '',
    phone: body.phone,
    privilege: privileges.user,
    emailApproved: false,
  });

  const checkIfUserExist = await User.findOne({ username: body.username });
  const checkIfEmailExist = await User.findOne({ email: body.email });

  if (checkIfUserExist) res.status(200).json({ status: 'user_alredy_exist' });
  else if (body.username.length < 3) res.status(200).json({ status: 'username_to_short' });
  else if (checkIfEmailExist) res.status(200).json({ status: 'email_alredy_exist' });
  else {
    try {
      const saveUser = await user.save();
      if (saveUser) {
        sendEmail(body.email, 'Welcome to SiemaBiz Forum', welcomeMessange(body.username));
        res.status(200).json({ status: 'ok', user: saveUser });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
