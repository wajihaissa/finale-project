const { check, validationResult } = require("express-validator");
exports.registerrules = () => [
  check("firstname", "firstname is required").notEmpty(),
  check("lastname", "lastname is required").notEmpty(),
  check("email", "email is required").isEmail(),
  check("password", "password is required").isLength({
    min: 6,
    max: 13,
  }),
];

exports.loginrules = () => [
  check("email", "email is required").isEmail(),
  check("password", "password is required").isLength({
    min: 6,
    max: 13,
  }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).send({
      error: errors.array().map((e) => ({
        msg: e.msg,
      })),
    });
  }
  next();
};
