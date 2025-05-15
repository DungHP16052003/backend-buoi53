const categoryService = require("@/services/category.service");
const response = require("@/utils/response");
const throwError = require("@/utils/throwError");

exports.getList = async (req, res) => {
  const categories = await categoryService.getAllCategory();
  response.success(res, 200, categories);
};

exports.getOne = async (req, res) => {
  response.success(req, 200, req.category);
};
exports.create = async (req, res) => {
  const item = await categoryService.create(req.body);
  response.success(req, 201, item);
};
exports.update = async (req, res) => {
  const item = await categoryService.update(req.category.id, req.body);
  response.success(req, 200, item);
};
exports.remove = async (req, res) => {
  await categoryService.remove(req.user.id);
  response.success(req, 204);
};
