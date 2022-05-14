const express = require("express");
const router = express.Router();

const { Price } = require("../model/Price");

router.get("/", (req, res) => {
  return res.send("hello price");
});

module.exports = router;
