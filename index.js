const express = require("express");
const logger = require("./middleware/logger");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(logger);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>
  res.status(200).send({
    title: "blog API",
  })
);

app.listen(3000, () => console.log(`Running at http://localhost:${PORT}`));
