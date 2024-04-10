const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filePath = path.join(__dirname, "../data/headlines.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const newsData = JSON.parse(data);
    const newsArticles = newsData.articles;
    res.render("selectedNews", { newsArticles, id });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
