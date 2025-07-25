const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.getAllUsers = (req, res) => {
  User.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    const safeUsers = result.map(user => {
      const { password, ...rest } = user;
      return rest;
    });

    res.status(200).json(safeUsers);
  });
};

exports.getUserById = (req, res) => {
  User.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: "User not found" });
    res.status(200).json(result[0]);
  });
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { name, email, password: hashedPassword };

    User.create(newUser, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = (req, res) => {
  User.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User updated successfully' });
  });
};

exports.deleteUser = (req, res) => {
  User.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User deleted successfully' });
  });
};
