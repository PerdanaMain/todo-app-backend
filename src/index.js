require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const logsMiddleware = require("./middlewares/logs");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logsMiddleware);

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
