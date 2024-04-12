const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.set("Cache-Control", "public, max-age=30");
  res.render("index", { title: "Express" });
});

module.exports = router;
