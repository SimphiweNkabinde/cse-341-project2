const mongoose = require("mongoose");
const idOptions = require("../utils/schemaIdOptions");

const schema = new mongoose.Schema(
  {
    providerId: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: false },
  },
  { ...idOptions, timestamps: true },
);
schema.virtual("id").get(function () {
  return this._id;
});

module.exports = mongoose.model("User", schema);
