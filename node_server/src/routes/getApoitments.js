const ApoitmentModel = require('../../models/apoitmentModel');

module.exports = async (req, res) => {
  const apoitments = await ApoitmentModel.find();
  if (apoitments) res.status(200).json(apoitments);
  else res.status(500);
};
