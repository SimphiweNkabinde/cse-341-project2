const { body } = require("express-validator");
const validate = require("./validate");
const validateIdParam = require("./ValidateIdParam");

const validationRules = [
  body("name")
    .isString()
    .withMessage("type must be a String")
    .notEmpty()
    .withMessage("type cannot be empty"),
];

module.exports = {
  validateCreate: [...validationRules, validate],
  validateUpdate: [validateIdParam, ...validationRules, validate],
  validateDeleteOne: validateIdParam,
  validateGetOne: validateIdParam,
};
