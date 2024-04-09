const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c872dc5c3a7546958dcb2c8b41c4d624"
    );
    if (response.ok) {
      const newsData = await response.json();
      const newsArticles = newsData.articles;
      res.render("home", { newsArticles });
    } else {
      console.error("Failed to update news");
      res.status(500).send("Failed to update news");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
