const { checkSchema } = require("express-validator");
const handlerErrors = require("./handlerErrors");

exports.createPostValidator = [
  checkSchema({
    title: {
      notEmpty: true,
      errorMessage: "truong nay khong duoc de trong",
    },
    description: {
      notEmpty: true,
      errorMessage: "truong nay khong duoc de trong",
    },
    content: {
      notEmpty: true,
      errorMessage: "truong nay khong duoc de trong",
    },
  }),
  handlerErrors,
];
exports.updatePostValidator = [
  checkSchema({
    title: {
      optional: true,
      notEmpty: true,
      errorMessage: "truong nay khong duoc de trong",
    },
    description: {
      optional: true,
      notEmpty: true,
      errorMessage: "truong nay khong duoc de trong",
    },
    content: {
      optional: true,
      notEmpty: true,
      errorMessage: "truong nay khong duoc de trong",
    },
  }),
  handlerErrors,
];
