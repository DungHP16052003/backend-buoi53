const { checkSchema } = require("express-validator");
const handlerErrors = require("./admin/handlerErrors");

exports.createTodosValidator = [
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "Tên sản phẩm không được để trống",
    },
    price: {
      notEmpty: true,
      errorMessage:
        "Giá sản phẩm không hợp lệ. hoặc Vui lòng nhập giá sản phẩm",
    },
    image: {
      notEmpty: true,
      errorMessage: "Vui lòng chọn hình ảnh cho sản phẩm.",
    },
    category: {
      notEmpty: true,
      errorMessage: "Vui lòng chọn danh mục cho sản phẩm",
    },
  }),
  handlerErrors,
];
exports.updateTodosValidator = [
  checkSchema({
    name: {
      optional: true,
      notEmpty: true,
      errorMessage: "Tên sản phẩm không được để trống",
    },
    price: {
      optional: true,
      notEmpty: true,
      errorMessage:
        "Giá sản phẩm không hợp lệ. hoặc Vui lòng nhập giá sản phẩm",
    },
    image: {
      optional: true,
      notEmpty: true,
      errorMessage: "Vui lòng chọn hình ảnh cho sản phẩm.",
    },
    category: {
      optional: true,
      notEmpty: true,
      errorMessage: "Vui lòng chọn danh mục cho sản phẩm",
    },
  }),
  handlerErrors,
];
