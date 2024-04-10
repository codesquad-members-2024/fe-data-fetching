const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.get("/news", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/headlines.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const newsData = JSON.parse(data);
    const newsArticles = newsData.articles;
    res.render("home", { newsArticles });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
