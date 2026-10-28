const user = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { name, email, number, age } = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already registered" });
    }
    const newUSer = new user({ name, email, number, age });
    await newUSer.save();
    res.status(201).json({
      success: true,
      message: "Data Save Successfully ",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
