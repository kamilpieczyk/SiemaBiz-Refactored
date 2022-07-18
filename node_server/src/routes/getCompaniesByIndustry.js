// Imports
const CompanyModel = require('../../models/companyModel');

// Module

module.exports = async (req, res) => {
  const industry = req.params.industry;
  try {
    const query = await CompanyModel.find({ industry });
    res.json({
      companies: query,
    });
  } catch (err) {
    console.error(err);
  }
};
