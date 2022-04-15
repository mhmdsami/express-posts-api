const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>
  res.status(200).send({
    title: "blog API",
  })
);

app.listen(3000, () => console.log(`Running at http://localhost:${PORT}`));
