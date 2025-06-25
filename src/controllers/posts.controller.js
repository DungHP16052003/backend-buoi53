const Post = require("@/models/post.model");
const postsService = require("@/services/posts.service");
const response = require("@/utils/response");
exports.getList = async (req, res) => {
  // const posts = await Post.findAll();
  const post = await Post.create({
    title: "đd",
    slug: "sdasasa",
    content: "fgg",
  });
  // const post = await postsService.create(req.body);
  // const posts = await postsService.getAll();
  response.success(res, 200, post);
};
exports.getOne = async (req, res) => {
  response.success(res, 200, req.post);
};

exports.create = async (req, res) => {
  const post = await Post.create({
    title: "đad",
    slug: "sdasasfsa",
    content: "fgsg",
  });
  // const post = await postsService.create(req.body);
  response.success(res, 201, post);
};

exports.update = async (req, res) => {
  const post = await postsService.update(req.post.id, req.body);
  response.success(res, 200, post);
};

exports.remove = async (req, res) => {
  await postsService.remove(req.post.id);
  response.success(res, 204);
};
