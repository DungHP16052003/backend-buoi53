const express = require("express");
const productsController = require("@/controllers/products.controller");
const {
  createProductsValidator,
  updateProductsValidator,
} = require("../validators/products.validator");
const router = express.Router();
// 1. Xóa bỏ mảng "posts" (Fake DB)
// 2. Thay thế "posts" tại các method bằng readDb(RESOURCE)
// 3. Tại methods thêm/sửa/xóa dùng writeDb(RESOURCE)

router.get("/", productsController.getList);

router.get("/:product", productsController.getOne);

router.post("/", createProductsValidator, productsController.create);

router.put("/:product", updateProductsValidator, productsController.update);
router.patch("/:product", updateProductsValidator, productsController.update);

router.delete("/:product", productsController.remove);

module.exports = router;
