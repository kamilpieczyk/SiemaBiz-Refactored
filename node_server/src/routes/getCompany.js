require('dotenv').config();

// Imports
const CompanyModel = require('../../models/companyModel');

// Module

module.exports = (req, res) => {
  const id = req.params.company;

  CompanyModel.findById(id).then(doc => {
    res.status(200);
    res.json({
      company: doc,
    });
  });
};
