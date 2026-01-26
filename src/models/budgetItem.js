const mongoose = require("mongoose");
const idOptions = require("../utils/schemaIdOptions");

const schema = new mongoose.Schema(
  {
    type: { type: String, enum: ["expense", "income"], required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { ...idOptions, timestamps: true },
);
schema.virtual("id").get(function () {
  return this._id;
});

module.exports = mongoose.model("BudgetItem", schema);
