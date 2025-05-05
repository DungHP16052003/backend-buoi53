const express = require("express");
const productsController = require("../controllers/products.controller");
const {
  createProductsValidator,
  updateProductsValidator,
} = require("../validators/products.validator");
const router = express.Router();
// 1. Xóa bỏ mảng "posts" (Fake DB)
// 2. Thay thế "posts" tại các method bằng readDb(RESOURCE)
// 3. Tại methods thêm/sửa/xóa dùng writeDb(RESOURCE)

router.get("/", productsController.index);

router.get("/:id", productsController.show);

router.post("/", createProductsValidator, productsController.store);

router.put("/:id", updateProductsValidator, productsController.update);
router.patch("/:id", updateProductsValidator, productsController.update);

router.delete("/:id", productsController.destroy);

module.exports = router;
