const { body } = require("express-validator");
const validate = require("./validate");
const validateIdParam = require("./ValidateIdParam");
const { isValidObjectId } = require("mongoose");

const validationRules = [
  body("type")
    .isString()
    .withMessage("type must be a String")
    .notEmpty()
    .withMessage("type cannot be empty")
    .isIn(["expense", "income"])
    .withMessage('type must be "expense" or "income"'),
  body("description")
    .isString()
    .withMessage("description must be a String")
    .notEmpty()
    .withMessage("description cannot be empty"),
  body("amount").isNumeric().withMessage("amount must be a Number"),
  body("category")
    .isString()
    .withMessage("category must be an id string")
    .notEmpty()
    .withMessage("category is required")
    .custom((value) => {
      if (!isValidObjectId(value)) {
        throw new Error("Invalid id");
      }
      return true;
    }),
];

module.exports = {
  validateCreate: [...validationRules, validate],
  validateUpdate: [validateIdParam, ...validationRules, validate],
  validateDeleteOne: validateIdParam,
  validateGetOne: validateIdParam,
};
