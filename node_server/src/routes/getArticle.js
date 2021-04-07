const articlesModel = require('../../models/articleModel');

module.exports = (req, res) => {
  const id = req.params.id;
  articlesModel.findOne({ _id: id }).then(article => {
    res
      .status(200)
      .json({
        status: 'ok',
        article,
      })
      .end();
  });
};
