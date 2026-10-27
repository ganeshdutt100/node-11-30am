const express = require("express");
const router = express.Router();

const { getConnectionStatus } = require("../controllers/testController");

router.get("/test", getConnectionStatus);
module.exports = router;
