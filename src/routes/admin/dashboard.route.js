const express = require("express");

const router = express.Router();
const dashboardController = require("@/controllers/admin/dashboard.controller");
const userValidator = require("@/validators/admin/users.validator");
router.get("/", dashboardController.dashboard);
router.get("/create", dashboardController.create);
router.get("/:id/edit", dashboardController.edit);
router.get("/:id", dashboardController.show);

router.post("/", userValidator.createUser, dashboardController.store);
router.put("/:id", userValidator.updateUser, dashboardController.update);
router.delete("/:id/delete", dashboardController.forceDelete);

module.exports = router;
