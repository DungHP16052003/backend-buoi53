const express = require("express");

const router = express.Router();
const AccountController = require("@/controllers/admin/account-settings.controller");
router.get("/", AccountController.account);

module.exports = router;
