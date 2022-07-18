const articlesModel = require('../../models/articleModel');
const assert = require('assert');

module.exports = (req, res) => {
  articlesModel.find({}, (err, doc) => {
    assert.equal(null, err);
    if (doc) {
      res.json(doc);
    }
  });
};
