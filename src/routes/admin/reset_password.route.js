const express = require("express");

const router = express.Router();
const resetController = require("@/controllers/admin/reset_password.controller");
router.get("/", resetController.reset_password);

module.exports = router;
