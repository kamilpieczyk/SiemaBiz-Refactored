const path = require('path');

module.exports = (req, res) => {
  const id = req.params.id;
  const imagePath = `${path.join(__dirname + '../../../..' + '/uploads/logos/' + id)}`;

  res.sendFile(imagePath);
};
