const Doctor = require('../models/Doctor');

// Создать нового врача
exports.createDoctor = async (req, res) => {
  try {
    const { name, spec, slots } = req.body;
    const doctor = new Doctor({ name, spec, slots });
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Получить врача по ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Добавьте другие методы по необходимости
