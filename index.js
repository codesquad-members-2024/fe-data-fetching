const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
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
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(8080, () => {
  console.log("listening on port 8080!!");
});
