const express = require("express");

const router = express.Router();
const AnalyticController = require("@/controllers/admin/analytics.controller");
router.get("/", AnalyticController.analytic);

module.exports = router;
