const { validationResult } = require("express-validator");

exports.validator = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const resultErrors = [];
    resultErrors.push({ success: false });
    errors.array().map((err) => resultErrors.push({ [err.param]: err.msg }));
    const errorObject = Object.assign({}, ...resultErrors);
    return res.status(422).json(errorObject);
  }
  next();
};
