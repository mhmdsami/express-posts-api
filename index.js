const express = require("express");
const logger = require("./middleware/logger");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) =>
  res.status(200).send({
    title: "blog API",
  })
);

app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
