const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const notificationService = require('../services/notificationService');

// Создать новую запись о приеме
exports.createAppointment = async (req, res) => {
  try {
    const { user_id, doctor_id, slot } = req.body;
    // Проверяем, свободен ли слот
    const isSlotAvailable = await Appointment.findOne({ doctor: doctor_id, slot });
    if (isSlotAvailable) {
      return res.status(400).json({ error: 'Slot is already booked' });
    }
    const appointment = new Appointment({ user: user_id, doctor: doctor_id, slot });
    await appointment.save();

    // Оповещения пользователя
    const user = await User.findById(user_id);
    const doctor = await Doctor.findById(doctor_id);
    notificationService.remindUserOneDayBefore(user, doctor, slot);
    notificationService.remindUserTwoHoursBefore(user, doctor, slot);

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Получить запись о приеме по ID
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Добавьте другие методы по необходимости
