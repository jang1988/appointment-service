const express = require('express');
const router = express.Router();

// Импортируйте контроллеры
const userController = require('./controllers/userController');
const doctorController = require('./controllers/doctorController');
const appointmentController = require('./controllers/appointmentController');

// Настройте маршруты
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
// Добавьте другие маршруты для пользователей

router.post('/doctors', doctorController.createDoctor);
router.get('/doctors/:id', doctorController.getDoctorById);
// Добавьте другие маршруты для врачей

router.post('/appointments', appointmentController.createAppointment);
router.get('/appointments/:id', appointmentController.getAppointmentById);
// Добавьте другие маршруты для записей о приемах

module.exports = router;
