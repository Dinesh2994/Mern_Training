const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  event: String,
  name: String,
  email: String,
  date: String,
  time: String
});

module.exports = mongoose.model('Booking', bookingSchema);
