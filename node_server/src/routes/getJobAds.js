const jobAdModel = require('../../models/jobAdModel');

module.exports = async (req, res) => {
  const { id } = req.params;

  if (id === 'all') {
    const allAds = await jobAdModel.find({});

    if (allAds) {
      res.status(200);
      res.json({
        ads: allAds,
      });
    }
  } else {
    const companyAds = await jobAdModel.find({ companyID: id });

    if (companyAds) {
      res.status(200).json({
        ads: companyAds,
      });
    }
  }
};
