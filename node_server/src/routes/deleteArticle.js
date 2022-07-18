const articlesModel = require('../../models/articleModel');
const assert = require('assert');

module.exports = (req, res) => {
  const id = req.body.id;

  articlesModel
    .deleteOne({ _id: id })
    .then(delArt => {
      res.status(200);
      res.json({
        status: 'ok',
        deleted_item: delArt,
      });
    })
    .catch(err => assert.equal(null, err));
};
