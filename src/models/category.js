const mongoose = require("mongoose");
const idOptions = require("../utils/schemaIdOptions");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { ...idOptions, timestamps: true },
);
schema.virtual("id").get(function () {
  return this._id;
});

module.exports = mongoose.model("Category", schema);
