const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.renderHomePage);
router.post("/add", taskController.handleAddTask);
router.post("/delete/:id", taskController.handleDeleteTask);

module.exports = router;
