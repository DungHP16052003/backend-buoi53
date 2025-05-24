const express = require("express");

const router = express.Router();
const CommentController = require("@/controllers/admin/comments.controller");
router.get("/", CommentController.comment);

module.exports = router;
