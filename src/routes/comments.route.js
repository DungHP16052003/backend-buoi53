const express = require("express");
const commentsController = require("../controllers/comments.controller");
const router = express.Router();
// 1. Xóa bỏ mảng "posts" (Fake DB)
// 2. Thay thế "posts" tại các method bằng readDb(RESOURCE)
// 3. Tại methods thêm/sửa/xóa dùng writeDb(RESOURCE)

router.get("/", commentsController.index);

router.get("/:id", commentsController.show);

router.post("/", commentsController.store);

router.put("/:id", commentsController.update);

router.delete("/:id", commentsController.destroy);

module.exports = router;
