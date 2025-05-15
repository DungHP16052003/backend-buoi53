const express = require("express");
const postsController = require("@/controllers/posts.controller");
const {
  createPostValidator,
  updatePostValidator,
} = require("@/validators/posts.validator");
const addResourceLoaders = require("@/utils/addResourceLoaders");

const router = express.Router();
addResourceLoaders(router, ["post"]);

router.get("/", postsController.getList);

router.get("/:post", postsController.getOne);

router.post("/", createPostValidator, postsController.create);

router.put("/:post", updatePostValidator, postsController.update);
router.patch("/:post", updatePostValidator, postsController.update);

router.delete("/:post", postsController.remove);

// posts comments
// router.get("/:id/comments", postsController.getPostComments);
// router.post("/:id/comments", postsController.createPostComments);

module.exports = router;
