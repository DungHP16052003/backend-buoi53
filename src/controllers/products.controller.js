const productsService = require("@/services/products.service");
const response = require("@/utils/response");

exports.getList = async (req, res) => {
  const products = await productsService.getAll();
  response.success(res, 200, products);
};
exports.getOne = async (req, res) => {
  response.success(res, 200, req.product);
};

exports.create = async (req, res) => {
  const product = await productsService.create(req.body);
  response.success(res, 201, product);
};
exports.update = async (req, res) => {
  const product = await productsService.create(req.product.id, req.body);
  response.success(res, 200, product);
};
exports.remove = async (req, res) => {
  await productsService.remove(req.product.id);
  response.success(res, 204);
};
