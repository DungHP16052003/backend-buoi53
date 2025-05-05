const { checkSchema } = require("express-validator");
const handlerErrors = require("./handlerErrors");

exports.createCategoryValidator = [
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "Tên sản phẩm không được để trống",
    },
    description: {
      notEmpty: true,
      errorMessage: "trường này không được để trống",
    },
    image: {
      notEmpty: true,
      errorMessage: "Vui lòng chọn hình ảnh cho sản phẩm.",
    },
  }),
  handlerErrors,
];
exports.updateCategoryValidator = [
  checkSchema({
    name: {
      optional: true,
      notEmpty: true,
      errorMessage: "Tên sản phẩm không được để trống",
    },
    description: {
      optional: true,
      notEmpty: true,
      errorMessage: "trường này không được để trống",
    },
    image: {
      optional: true,
      notEmpty: true,
      errorMessage: "Vui lòng chọn hình ảnh cho sản phẩm.",
    },
  }),
  handlerErrors,
];
