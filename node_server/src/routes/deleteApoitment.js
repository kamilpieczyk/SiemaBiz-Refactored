const ApoitmentModel = require('../../models/apoitmentModel');

module.exports = async (req, res) => {
  const { id } = req.params;
  const deleteApoitment = await ApoitmentModel.findByIdAndDelete({ _id: id });
  if (deleteApoitment)
    res.status(200).json({
      status: 'ok',
      deletedItem: deleteApoitment,
    });
  else res.status(500);
};
