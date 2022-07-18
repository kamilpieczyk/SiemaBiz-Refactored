const UserModel = require('../../models/userModel');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  const { username, newPassword } = req.body;
  const salt = bcrypt.genSaltSync(10);

  console.log(username, newPassword, salt);
  const change = await UserModel.findOneAndUpdate(
    { username },
    {
      $set: {
        pwd: bcrypt.hashSync(newPassword, salt),
      },
    }
  );

  console.log(change);

  if (change) {
    res.status(200);
    res.json({
      status: 'ok',
    });
  } else {
    res.status(200);
    res.json({
      status: 'fail',
    });
  }
};
