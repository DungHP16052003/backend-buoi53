const express = require("express");
const postsController = require("../controllers/posts.controller");
const {
  createPostValidator,
  updatePostValidator,
} = require("../validators/posts.validator");
const fs = require("fs").promises;

const DB_PATH = "./db.json";
const RESOURCE = "posts";

// Write DB
const writeDb = async (resource, data) => {
  let db = {};
  try {
    const jsonDb = await fs.readFile(DB_PATH, "utf-8");
    db = JSON.parse(jsonDb);
  } catch (error) {}

  db[resource] = data;

  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
};

// Read DB
const readDb = async (resource) => {
  try {
    const jsonDb = await fs.readFile(DB_PATH, "utf-8");
    const db = JSON.parse(jsonDb) ?? {};
    return db[resource] ?? [];
  } catch (error) {
    return [];
  }
};

const router = express.Router();

// 1. Xóa bỏ mảng "posts" (Fake DB)
// 2. Thay thế "posts" tại các method bằng readDb(RESOURCE)
// 3. Tại methods thêm/sửa/xóa dùng writeDb(RESOURCE)

router.get("/", postsController.index);

router.get("/:id", postsController.show);

router.post("/", createPostValidator, postsController.store);

router.put("/:id", updatePostValidator, postsController.update);
router.patch("/:id", updatePostValidator, postsController.update);

router.delete("/:id", postsController.destroy);

module.exports = router;
