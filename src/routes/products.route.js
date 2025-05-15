const express = require("express");
const productsController = require("@/controllers/products.controller");
const {
  createProductsValidator,
  updateProductsValidator,
} = require("../validators/products.validator");
const addResourceLoaders = require("@/utils/addResourceLoaders");
const router = express.Router();
addResourceLoaders[(router, ["product"])];

router.get("/", productsController.getList);

router.get("/:product", productsController.getOne);

router.post("/", createProductsValidator, productsController.create);

router.put("/:product", updateProductsValidator, productsController.update);
router.patch("/:product", updateProductsValidator, productsController.update);

router.delete("/:product", productsController.remove);

module.exports = router;
