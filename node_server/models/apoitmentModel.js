const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApoitmentSchema = new Schema({
  date: { type: Date, required: true },
  available: Boolean,
  bookedBy: { type: String, required: false },
  bookedAt: { type: Date, required: false },
});

module.exports = mongoose.model('apoitment', ApoitmentSchema);
