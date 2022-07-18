// Imports
const CompanyModel = require('../../models/companyModel');

// Module

module.exports = async (req, res) => {
  try {
    const query = await CompanyModel.find({});
    res.json({
      companies: query,
    });
  } catch (err) {
    console.error(err);
  }
};
