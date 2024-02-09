const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  slot: { type: Date, required: true },
  // Добавьте другие поля по необходимости
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
