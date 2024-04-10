const express = require("express");
const app = express();
const path = require("path");
const newsRoutes = require("./routes/index");
const eachNewsRoutes = require("./routes/news");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", newsRoutes);
app.use("/news", eachNewsRoutes);

app.listen(8080, () => {
  console.log("listening on port 8080!!");
});
