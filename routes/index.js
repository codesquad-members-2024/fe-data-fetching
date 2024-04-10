const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
