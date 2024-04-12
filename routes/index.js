const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync.js");

router.get(
  "/",
  catchAsync(async (req, res) => {
    if (Math.random() < 0.3) {
      throw new Error("500에러 발생!!!");
    } else {
      res.render("home");
    }
  })
);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", { message: err.message });
});

module.exports = router;
