const mongoose = require("mongoose");

const opts = {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
};

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
  opts,
);
schema.virtual("id").get(function () {
  return this._id;
});

module.exports = mongoose.model("BudgetItem", schema);
