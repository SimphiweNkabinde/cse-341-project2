const User = require("../models/user");

async function findOrCreate(data, callback = (err, user) => {}) {
  try {
    const findResult = await User.find({ providerId: data.id });
    if (findResult.length) {
      return callback(null, findResult[0]);
    }

    const createResult = await User.create({
      providerId: data.id,
      username: data.username,
      email: data.email,
    });
    return callback(null, createResult);
  } catch (error) {
    return callback(error, null);
  }
}

module.exports = { findOrCreate };
