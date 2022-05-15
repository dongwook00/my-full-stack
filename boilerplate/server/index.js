const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const port = 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.error(error));

app.get("/api/hello", (req, res) => res.send("Hello World!"));

app.use("/api/users", require("./routes/users"));
app.use("/api/favorite", require("./routes/favorite"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
