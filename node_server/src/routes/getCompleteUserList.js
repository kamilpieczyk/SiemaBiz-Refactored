const UserModel = require('../../models/userModel');

module.exports = async (req, res) => {
  const userID = req.body.userID;
  const user = await UserModel.findById(userID);
  console.log(user);
  if (user.privilege >= 225805) {
    const users = await UserModel.find();
    if (users) {
      res.status(200);
      res.json(users);
    } else {
      res.status(404);
      res.json({
        status: 'no users in database',
      });
    }
  } else {
    res.status(401).json({ status: 'not_authorised' });
  }
};
