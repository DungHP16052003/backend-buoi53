const express = require("express");
const categoryController = require("../controllers/category.controller");
const {
  createCategoryValidator,
  updateCategoryValidator,
} = require("../validators/category.validator");

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

router.get("/", categoryController.index);

router.get("/:id", categoryController.show);

router.post("/", createCategoryValidator, categoryController.store);

router.put("/:id", updateCategoryValidator, categoryController.update);
router.patch("/:id", updateCategoryValidator, categoryController.update);

router.delete("/:id", categoryController.destroy);

module.exports = router;
