const User = require("../models/userModel");

const getUsers = (req, res) => {
  const users = User.getAllUser();

  res.json({
    success: true,
    data: users,
  });
};

module.exports = {
  getUsers,
};
