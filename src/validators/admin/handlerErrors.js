const { validationResult } = require("express-validator");

const handlerValidatorErrors = (req, res, next) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) return next();

  errors = errors
    .array({
      onlyFirstError: true,
    })
    .reduce((errors, error) => {
      errors[error.path] = error.msg;
      return errors;
    }, {});

  res.render(res.view, {
    errors,
    old: req.body,
    id: req.params,
    [res.name]: {},
  });
  // return res.status(422).json({
  //     errors: formattedErrors,
  // });
};

module.exports = handlerValidatorErrors;
