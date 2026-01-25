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
    name: String,
  },
  opts,
);
schema.virtual("id").get(function () {
  return this._id;
});

module.exports = mongoose.model("Category", schema);
