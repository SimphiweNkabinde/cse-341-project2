const mongoose = require("mongoose");
const idOptions = require("../utils/schemaIdOptions");

const schema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    notes: { type: String, required: false },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    budgetItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BudgetItem",
      required: true,
    },
  },
  { ...idOptions, timestamps: true },
);
schema.virtual("id").get(function () {
  return this._id;
});

module.exports = mongoose.model("Transaction", schema);
