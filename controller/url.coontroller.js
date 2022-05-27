const express = require("express");
const router = express.Router();
const Url = require("../models/url.model");

router.post("/", async (req, res) => {
  try {
    let url = await Url.create(req.body);
    return res
      .status(201)
      .send({ url: `https://masai-url-shorten.herokuapp.com/${url.name}` });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

router.get("/:name", async (req, res) => {
  try {
    let url = await Url.findOne({ name: req.params.name }).lean().exec();

    res.redirect(`${url.mainUrl}`);
  } catch (error) {
    return error;
  }
});

router.get("/", async (req, res) => {
  try {
    // let url = await Url.findOne({ name: req.params.name }).lean().exec();

    res.redirect(`http://127.0.0.1:5500/index.html`);
  } catch (error) {
    return error;
  }
});

module.exports = router;
