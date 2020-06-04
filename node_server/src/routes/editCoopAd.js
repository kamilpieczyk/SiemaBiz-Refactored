const CoopAdsModel = require('../../models/coopAd.model');
const date = require('../components/getDate');

module.exports = async (req, res) => {
  const { id, title, content, industry, city } = req.body;

  const data = await CoopAdsModel.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        title,
        content,
        industry,
        city,
        date: date(),
      },
    }
  );

  if (data) {
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
