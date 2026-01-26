const { body } = require("express-validator");
const validate = require("./validate");
const validateIdParam = require("./validateIdParam");
const { isValidObjectId } = require("mongoose");

const validationRules = [
  body("description")
    .isString()
    .withMessage("description must be a String")
    .notEmpty()
    .withMessage("description cannot be empty"),
  body("notes").isString().withMessage("notes must be a String"),
  body("amount").isNumeric().withMessage("amount must be a Number"),
  body("date")
    .notEmpty()
    .withMessage("date is required")
    .isDate()
    .withMessage("date must be a valid date"),
  body("budgetItem")
    .isString()
    .withMessage("budgetItem must be an id string")
    .notEmpty()
    .withMessage("budgetItem is required")
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
