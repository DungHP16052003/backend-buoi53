const express = require("express");
const postsController = require("@/controllers/posts.controller");
const {
  createPostValidator,
  updatePostValidator,
} = require("@/validators/posts.validator");

const router = express.Router();

router.get("/", postsController.getList);

router.get("/:id", postsController.getOne);

router.post("/", createPostValidator, postsController.create);

router.put("/:id", updatePostValidator, postsController.update);
router.patch("/:id", updatePostValidator, postsController.update);

router.delete("/:id", postsController.remove);

// posts comments
// router.get("/:id/comments", postsController.getPostComments);
// router.post("/:id/comments", postsController.createPostComments);

module.exports = router;
