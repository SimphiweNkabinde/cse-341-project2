const Transaction = require("../models/transaction");

async function getAll(req, res) {
  try {
    const result = await Transaction.find().populate("budgetItem");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function getOne(req, res) {
  try {
    const result = await Transaction.findById(req.params.id).populate(
      "budgetItem",
    );
    if (!result) {
      return res.status(404).json("Record Not Found");
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function create(req, res) {
  const { description, notes, amount, date, budgetItem } = req.body;
  try {
    const result = await Transaction.create({
      description,
      notes,
      amount,
      date,
      budgetItem,
    });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function update(req, res) {
  const { description, notes, amount, date, budgetItem } = req.body;
  try {
    const result = await Transaction.updateOne(
      { _id: req.params.id },
      { description, notes, amount, date, budgetItem },
    );

    if (!result.acknowledged) {
      return res
        .status(500)
        .json({ error: "An error occurred while updating the record" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function remove(req, res) {
  try {
    const result = await Transaction.deleteOne({ _id: req.params.id });

    if (!result.acknowledged) {
      return res
        .status(500)
        .json({ error: "An error occurred while updating the record" });
    }

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

module.exports = { getAll, getOne, create, update, remove };
