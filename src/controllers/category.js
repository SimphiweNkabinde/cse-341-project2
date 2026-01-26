const Category = require("../models/category");

async function getAll(req, res) {
  try {
    const result = await Category.find();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function getOne(req, res) {
  try {
    const result = await Category.findById(req.params.iduu);
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
  const { name } = req.body;
  try {
    const result = await Category.create({ name });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function update(req, res) {
  const { name } = req.body;
  try {
    const result = await Category.updateOne({ _id: req.params.id }, { name });

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
    const result = await Category.deleteOne({ _id: req.params.id });

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
