const express = require("express");
const router = express.Router();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data/news.json", "utf8"));

router.get("/", (req, res, next) => {
  res.set("Cache-Control", "public, max-age=30");
  res.json(data);
});

module.exports = router;
