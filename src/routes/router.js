const express = require("express");
const {
  index,
  store,
  update,
  destroy,
  changeStatus,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

router.get("/todos", index);
router.post("/todos", store);
router.put("/todos/:id", update);
router.put("/todos/:id/status", changeStatus);
router.delete("/todos/:id", destroy);

module.exports = router;
