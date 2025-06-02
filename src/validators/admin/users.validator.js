const { checkSchema } = require("express-validator");
const handlerErrors = require("@/validators/admin/handlerErrors");

exports.createUser = [
  (req, res, next) => {
    res.view = "admin/dashboard/create";
    next();
  },
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "name is not empty",
    },
    email: {
      notEmpty: {
        errorMessage: "email is not empty",
      },
      isEmail: {
        errorMessage: "Must be an not email",
      },
    },
  }),
  handlerErrors,
];
exports.updateUser = [
  (req, res, next) => {
    const { id } = req.params;
    res.view = "admin/dashboard/update";
    res.name = `user`;
    next();
  },
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "name is not empty",
    },
    email: {
      notEmpty: {
        errorMessage: "email is not empty",
      },
      isEmail: {
        errorMessage: "Must be an not email",
      },
    },
  }),
  handlerErrors,
];
