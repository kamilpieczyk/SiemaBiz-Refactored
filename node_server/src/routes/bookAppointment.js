const ApoitmentModel = require('../../models/apoitmentModel');
const UserModel = require('../../models/userModel');
const sendSMS = require('../components/send');

module.exports = async (req, res) => {
  const { username, appointmentID } = req.body;

  const booking = await ApoitmentModel.findByIdAndUpdate(appointmentID, {
    $set: {
      available: false,
      bookedBy: username,
      bookedAt: new Date(),
    },
  });
  if (booking) {
    const user = await UserModel.findOne({ username });
    const appointment = await ApoitmentModel.findOne({ _id: appointmentID });
    const date = `${appointment.date.getDate()}-${appointment.date.getMonth()}-${appointment.date.getFullYear()}`;
    const time = `${appointment.date.getHours()}:${appointment.date.getMinutes()}`;
    sendSMS(
      `44${user.phone}`,
      `Hi ${username}! \n Thank you for booking an appointment with us. You appointment has been set on ${date} at ${time} \n`
    );
    res.status(200).json({
      status: 'ok',
    });
  } else {
    res.status(500);
  }
};
