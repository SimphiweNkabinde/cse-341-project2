const { body } = require("express-validator");
const validate = require("./validate");

const validationRules = [
  body("name")
    .isString()
    .withMessage("type must be a String")
    .notEmpty()
    .withMessage("type cannot be empty"),
];

module.exports = {
  validateCreate: [...validationRules, validate],
  validateUpdate: [...validationRules, validate],
};
