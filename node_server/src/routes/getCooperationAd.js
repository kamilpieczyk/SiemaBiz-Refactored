const CoopAdsModel = require("../../models/coopAd.model");

module.exports = async (req, res) => {
  const { id } = req.params;

  const offer = await CoopAdsModel.findById(id);
  if (offer) {
    res.status(200).json({
      offer,
    });
  }
};
