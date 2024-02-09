const User = require('../models/User');

// Создать нового пользователя
exports.createUser = async (req, res) => {
  try {
    const { phone, name } = req.body;
    const user = new User({ phone, name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Получить пользователя по ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Добавьте другие методы по необходимости
