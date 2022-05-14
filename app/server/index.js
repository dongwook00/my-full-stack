const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/key");

const port = 3000;
const app = express();

mongoose
  .connect(config.DB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => res.send("Hello world"));

app.use("/api/price", require("./routes/price"));

app.listen(port, () => console.log(`Listening on port ${port}`));
