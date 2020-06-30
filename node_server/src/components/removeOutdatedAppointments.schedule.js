const schedule = require('node-schedule');
const AppoitmentModel = require('../../models/apoitmentModel');

const rule = new schedule.RecurrenceRule();
rule.hour = 23;

const removeOutdatetAppointments = async () => {
  const appoitments = await AppoitmentModel.find();
  const date = new Date();
  for (let appointment of appoitments) {
    if (appointment.date < date) AppoitmentModel.findByIdAndDelete(appointment._id);
  }
};

module.exports = schedule.scheduleJob(rule, removeOutdatetAppointments);
