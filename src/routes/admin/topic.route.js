const express = require("express");

const router = express.Router();
const topicController = require("@/controllers/admin/topics.controller");
router.get("/", topicController.topic);

module.exports = router;
