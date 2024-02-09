const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  spec: { type: String, required: true },
  slots: [{ type: Date }],
  // Добавьте другие поля по необходимости
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
