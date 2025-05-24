const express = require("express");

const router = express.Router();
const forgotPasswordController = require("@/controllers/admin/forgot_password.controller");
router.get("/", forgotPasswordController.forgot_password);

module.exports = router;
