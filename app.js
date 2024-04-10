const express = require("express");
const app = express();
const path = require("path");
const newsRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", newsRoutes);

const fs = require("fs");

app.get("/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filePath = path.join(__dirname, "data/headlines.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const newsData = JSON.parse(data);
    const newsArticles = newsData.articles;
    res.render("selectedNews", { newsArticles, id });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(8080, () => {
  console.log("listening on port 8080!!");
});
