const CoopAdsModel = require('../../models/coopAd.model');

module.exports = async (req, res) => {
  const ads = await CoopAdsModel.find({});
  if (ads) {
    res.status(200).json([...ads]);
  } else {
    res.status(500).json({
      status: 'error',
    });
  }
};
