const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const port = 3000;
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.padg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.error(error));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
