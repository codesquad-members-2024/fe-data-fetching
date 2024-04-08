const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=kr&apiKey=693f3799981248d6b896d0385ee5a7a6"
    );
    const datas = response.data.articles;
    res.render("home", { datas });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(8080, () => {
  console.log("listening on port 8080!!");
});
