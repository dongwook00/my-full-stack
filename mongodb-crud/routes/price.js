const express = require("express");
const router = express.Router();

const { Price } = require("../model/Price");

router.post("/create", (req, res) => {
  const price = new Price(req.body);

  price.save((err, info) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true, info });
  });
});

router.get("/", async (req, res) => {
  const price = await Price.find({});
  console.log("price", price);
  return res.status(200).json({ price });
});

router
  .route("/:id")
  .patch(async (req, res) => {
    const result = await Price.findOneAndUpdate(
      { _id: req.params.id },
      { item: req.body.item }
    );
    return res.status(200).json({ result });
  })
  .delete(async (req, res) => {
    const result = await Price.deleteOne({ _id: req.params.id });
    return res.status(200).json({ result });
  });

module.exports = router;
