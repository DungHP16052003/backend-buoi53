const express = require("express");
const userController = require("@/controllers/users.controller");
const userModel = require("@/models/user.model");
const addResourceLoaders = require("@/utils/addResourceLoaders");
const router = express.Router();

addResourceLoaders(router, ["user"]);

router.get("/", userController.getList);
router.get("/:user", userController.getOne);
router.post("/", userController.create);
router.put("/:user", userController.update);
router.patch("/:user", userController.update);
router.delete("/:user", userController.remove);

module.exports = router;
