require('dotenv').config();

const Cv = require('../../models/cvModel');

module.exports = (req, res) => {
  // this function is responsible for making a changes in user's cv

  const body = req.body;
  const { username } = req.body;
  Cv.findOne({ username })
    .then(data => {
      if (data === null)
        Cv.create(body).then(() => {
          res
            .status(200)
            .json({
              status: 'ok',
              msg: 'new record has been added',
            })
            .end();
        });
      else
        Cv.findOneAndUpdate({ username }, body).then(() => {
          res
            .status(200)
            .json({
              status: 'ok',
              msg: 'cv has been updated',
            })
            .end();
        });
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({
          status: 'error',
          msg: 'server error',
        })
        .end();
    });
};
