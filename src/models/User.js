const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  name: { type: String, required: true },
  // Добавьте другие поля по необходимости
});

const User = mongoose.model('User', userSchema);

module.exports = User;
