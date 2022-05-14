const mongoose = require("mongoose");

const priceSchema = mongoose.Schema({
  item: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Price = mongoose.model("Price", priceSchema);

module.exports = { Price };
