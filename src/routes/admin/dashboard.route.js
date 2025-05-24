const express = require("express");

const router = express.Router();
const dashboardController = require("@/controllers/admin/dashboard.controller");
router.get("/", dashboardController.dashboard);
router.get("/create", dashboardController.create);
router.get("/:id", dashboardController.show);

router.post("/", dashboardController.store);

module.exports = router;
