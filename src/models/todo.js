const dbPool = require("../config/database");

const getAll = async () => {
  const sql = "SELECT * FROM todos";
  return dbPool.execute(sql);
};

const getOne = async (id) => {
  const sql = "SELECT * FROM todos WHERE id = ?";
  return dbPool.execute(sql, [id]);
};

const create = async (title) => {
  const sql = "INSERT INTO todos (title) VALUES (?)";
  return dbPool.execute(sql, [title]);
};

const update = async (title, id) => {
  const sql = "UPDATE todos SET title = ? WHERE id = ?";
  return dbPool.execute(sql, [title, id]);
};

const destroy = async (id) => {
  const sql = "DELETE FROM todos WHERE id = ?";
  return dbPool.execute(sql, [id]);
};

const updateStatus = async (status, id) => {
  const sql = "UPDATE todos SET status = ? WHERE id = ?";
  return dbPool.execute(sql, [status, id]);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,
  updateStatus,
};
