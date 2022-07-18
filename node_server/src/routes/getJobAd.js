const jobAdModel = require('../../models/jobAdModel');

module.exports = async (req, res) => {
  const { id } = req.params;
  const companyAd = await jobAdModel.findById(id);

  if (companyAd) res.status(200).json(companyAd);
  else res.status(404);
};
