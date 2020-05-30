const CoopAdsModel = require("../../models/coopAd.model");

module.exports = async (req, res) => {
  const company = req.params.company;

  const ads = await CoopAdsModel.find({ company });
  if (ads) {
    res.status(200).json([ ...ads ]);
  }
  else{
    res.status(500).json({
      status: 'error'
    })
  }
};
