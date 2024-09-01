const Todo = require("../models/todo");

const index = async (req, res) => {
  try {
    const [todos] = await Todo.getAll();

    return res.json({ message: "Todo list berhasil didapatkan", data: todos });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const store = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const [result] = await Todo.create(title);
    const [todo] = await Todo.getOne(result.insertId);

    return res.json({
      message: "Todo berhasil ditambahkan",
      data: todo[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const { title } = req.body;
    const { id } = req.params;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const [result] = await Todo.update(title, id);
    const [todo] = await Todo.getOne(id);

    return res.json({
      message: "Todo berhasil diupdate",
      data: todo[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.destroy(id);

    return res.json({
      message: "Todo berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const changeStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    await Todo.updateStatus(status, id);
    const [todo] = await Todo.getOne(id);

    return res.json({
      message: "Status berhasil diupdate",
      data: todo[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  index,
  store,
  update,
  destroy,
  changeStatus,
};
