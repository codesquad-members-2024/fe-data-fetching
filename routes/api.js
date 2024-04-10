const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/news/list", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/headlines.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const newsData = JSON.parse(data);
    const newsTitleList = newsData.articles.map((article) => ({
      id: article.source.id,
      title: article.title,
    }));
    res.send(newsTitleList);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

router.get("/news/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const filePath = path.join(__dirname, "../data/headlines.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const newsData = JSON.parse(data);
    const news = newsData.articles.find(
      (article) => String(article.source.id) === id
    );
    res.send(news);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
