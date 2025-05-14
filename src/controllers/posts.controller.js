const postsService = require("@/services/posts.service");
const response = require("@/utils/response");
exports.getList = async (req, res) => {
  const posts = await postsService.getAll();
  response.success(res, 200, posts);
};
exports.getOne = async (req, res) => {
  response.success(res, 200, req.post);
};

exports.create = async (req, res) => {
  const post = await postsService.create(req.body);
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
