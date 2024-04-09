const express = require("express");
const app = express();
const path = require("path");
const newsRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", newsRoutes);

app.listen(8080, () => {
  console.log("listening on port 8080!!");
});
