const express = require("express");

const router = express.Router();
const ProductController = require("@/controllers/admin/products.controller");
router.get("/", ProductController.product);

module.exports = router;
