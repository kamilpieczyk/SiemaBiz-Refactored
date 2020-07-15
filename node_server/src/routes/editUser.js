const UserModel = require('../../models/userModel');
const privTab = require('../components/privileges');

module.exports = async (req, res) => {
  const { id, username, email, name, surname, phone, privilege } = req.body;

  const data = await UserModel.findByIdAndUpdate(id, {
    $set: {
      username,
      email,
      name,
      surname,
      phone,
      privilege,
    },
  });

  if (data) {
    res.status(200);
    res.json({
      status: 'ok',
    });
  } else {
    res.status(200);
    res.json({
      status: 'error',
    });
  }
};
