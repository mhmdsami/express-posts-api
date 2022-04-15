const express = require("express");
const logger = require("./middleware/logger");

const posts = require("./Posts");

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

app.get("/api/posts", (req, res) => {
  res.status(200).json(posts);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
