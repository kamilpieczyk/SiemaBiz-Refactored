const articlesModel = require('../../models/articleModel');
const assert = require('assert');

module.exports = (req, res) => {
  const id = req.body.id;

  articlesModel
    .findOne({ _id: id })
    .then(article => {
      res.status(200);
      res.json({
        status: 'ok',
        article,
      });
    })
    .catch(err => assert.equal(null, err));
};
