const bcrypt = require('bcrypt');
const UserModel = require('../../models/userModel');

module.exports = async (req, res) => {
  const { password, username } = req.body;

  const user = await UserModel.findOne({ username });
  const compared = await bcrypt.compare(password, user.pwd);

  if (compared) {
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
