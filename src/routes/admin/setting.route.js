const express = require("express");

const router = express.Router();
const SettingController = require("@/controllers/admin/settings.controller");
router.get("/", SettingController.setting);

module.exports = router;
