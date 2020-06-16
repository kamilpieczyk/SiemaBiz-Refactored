const ApoitmentModel = require('../../models/apoitmentModel');

module.exports = async (req, res) => {
  const { date } = req.body;
  const Apoitment = new ApoitmentModel({
    date,
    available: true,
  });
  const save = await Apoitment.save();
  if (save)
    res.status(200).json({
      status: 'ok',
      object: save,
    });
  else {
    res.status(500).json({
      status: 'error',
      description: 'problem with saving new record into database',
    });
  }
};
