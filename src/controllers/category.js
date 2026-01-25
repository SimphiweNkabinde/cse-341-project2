const Category = require("../models/category");

async function getAll(req, res) {
  try {
    const result = await Category.find();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function getOne(req, res) {
  try {
    const result = await Category.findById(req.params.id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function create(req, res) {
  const { name } = req.body;
  try {
    const result = await Category.create({ name });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function update(req, res) {
  const { name } = req.body;
  try {
    const result = await Category.updateOne({ _id: req.params.id }, { name });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

async function remove(req, res) {
  try {
    const result = await Category.deleteOne({ _id: req.params.id });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}

module.exports = { getAll, getOne, create, update, remove };
