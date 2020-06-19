const ApoitmentModel = require('../../models/apoitmentModel');

module.exports = async (req, res) => {
  const appointments = await ApoitmentModel.find();
  if (appointments) {
    const sorted = appointments.sort((a, b) => a.date - b.date);
    res.status(200).json(sorted);
  } else res.status(500);
};
