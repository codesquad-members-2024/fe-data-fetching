const express = require("express");
const router = express.Router();
const parseJsonData = require("../utils/jsonParser.js");
const catchAsync = require("../utils/catchAsync.js");

router.get(
  "/news/list",
  catchAsync(async (req, res) => {
    const newsData = parseJsonData("../data/headlines.json");
    const newsTitleList = newsData.articles.map((article) => ({
      id: article.source.id,
      title: article.title,
    }));
    res.send(newsTitleList);
  })
);

router.get(
  "/news/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const newsData = parseJsonData("../data/headlines.json");
    const news = newsData.articles.find(
      (article) => String(article.source.id) === id
    );
    res.send(news);
  })
);

module.exports = router;
