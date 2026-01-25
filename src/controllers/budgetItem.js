const BudgetItem = require("../models/budgetItem");

async function getAll(req, res) {
  try {
    const result = await BudgetItem.find().populate("category");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function getOne(req, res) {
  try {
    const result = await BudgetItem.findById(req.params.id).populate(
      "category",
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function create(req, res) {
  const { type, description, amount, category } = req.body;
  try {
    const result = await BudgetItem.create({
      type,
      description,
      amount,
      category,
    });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function update(req, res) {
  const { type, description, amount, category } = req.body;
  try {
    const result = await BudgetItem.updateOne(
      { _id: req.params.id },
      { type, description, amount, category },
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function remove(req, res) {
  try {
    const result = await BudgetItem.deleteOne({ _id: req.params.id });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

module.exports = { getAll, getOne, create, update, remove };
