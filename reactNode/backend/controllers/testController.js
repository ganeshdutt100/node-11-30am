const Test = require("../models/testModel");

exports.getConnectionStatus = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "React , node + mongoDB (MVC pattern )",
    });
  } catch (error) {
    (res.status(500),
      json({
        success: false,
        error: error.message,
      }));
  }
};
