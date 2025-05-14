const express = require("express");
const categoryController = require("@/controllers/category.controller");
const {
  createCategoryValidator,
  updateCategoryValidator,
} = require("../validators/category.validator");

const router = express.Router();

router.get("/", categoryController.getListCategory);

router.get("/:category", categoryController.getOne);

router.post("/", createCategoryValidator, categoryController.create);

router.put("/:category", updateCategoryValidator, categoryController.update);
router.patch("/:category", updateCategoryValidator, categoryController.update);

router.delete("/:category", categoryController.remove);

module.exports = router;
