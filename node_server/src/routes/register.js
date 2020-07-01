const bcrypt = require('bcrypt');
const hash = require('hash-generator');
const User = require('../../models/userModel');
const env = require('dotenv');
const privileges = require('../components/privileges');
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
    userID: hash(10),
    privilege: privileges.user,
    emailApproved: false,
  });

  const checkIfUserExist = await User.findOne({ username: body.username });
  const checkIfEmailExist = await User.findOne({ email: body.email });

  if (checkIfUserExist) res.status(200).json({ status: 'user_alredy_exist' });
  else if (checkIfEmailExist) res.status(200).json({ status: 'email_alredy_exist' });
  else {
    try {
      const saveUser = await user.save();
      if (saveUser) res.status(200).json({ status: 'ok' });
    } catch (err) {
      if (err) res.status(500);
    }
  }

  //   User.findOne({ username: body.username }, (err, doc) => {
  //     if (doc) {
  //       res.status(200);
  //       res.json({
  //         status: 'exist',
  //       });
  //     } else {
  //       User.findOne({ email: body.email }, (err, doc) => {
  //         if (doc) {
  //           res.status(200);
  //           res.json({
  //             status: 'email_exist',
  //           });
  //         } else {
  //           user
  //             .save()
  //             .then(() => {
  //               console.log('user saved in database');
  //             })
  //             .catch(err => {
  //               console.log(err);
  //             });

  //           res.status(200);
  //           res.json({
  //             status: 'added',
  //           });
  //         }
  //       });
  //     }
  //   });
};
