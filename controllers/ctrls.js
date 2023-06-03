const userService = require('../services/db');

// Функция для получения сведений о пользователе по его ID
async function getUserById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
}

// Функция для создания нового пользователя
async function createComment(req, res) {
    const newUser = await userService.addComment(req.body);
}

// Функция для обновления сведений о пользователе
async function updateUser(req, res) {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
}

// Функция для удаления пользователя
async function deleteUser(req, res) {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
}

module.exports = {
  getUserById,
  createComment,
  updateUser,
  deleteUser,
};