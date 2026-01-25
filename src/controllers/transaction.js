const Transaction = require("../models/transaction");

async function getAll(req, res) {
  try {
    const result = await Transaction.find().populate("category");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function getOne(req, res) {
  try {
    const result = await Transaction.findById(req.params.id).populate(
      "category",
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function create(req, res) {
  const { type, description, amount, date, category } = req.body;
  try {
    const result = await Transaction.create({
      type,
      description,
      amount,
      date,
      category,
    });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function update(req, res) {
  const { type, description, amount, date, category } = req.body;
  try {
    const result = await Transaction.updateOne(
      { _id: req.params.id },
      { type, description, amount, date, category },
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function remove(req, res) {
  try {
    const result = await Transaction.deleteOne({ _id: req.params.id });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

module.exports = { getAll, getOne, create, update, remove };
