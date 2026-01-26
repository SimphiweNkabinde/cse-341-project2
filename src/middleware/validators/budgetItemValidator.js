const { body } = require("express-validator");
const validate = require("./validate");
const validateIdParam = require("./validateIdParam");

const validationRules = [
  body("type")
    .isString()
    .withMessage("type must be a String")
    .notEmpty()
    .withMessage("type cannot be empty")
    .isIn(["expense", "income"])
    .withMessage('type must be "expense" or "income"'),
  body("name")
    .isString()
    .withMessage("name must be a String")
    .notEmpty()
    .withMessage("name cannot be empty"),
  body("amount").isNumeric().withMessage("amount must be a Number"),
];

module.exports = {
  validateCreate: [...validationRules, validate],
  validateUpdate: [validateIdParam, ...validationRules, validate],
  validateDeleteOne: validateIdParam,
  validateGetOne: validateIdParam,
};
