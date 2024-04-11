const fs = require("fs");
const path = require("path");

module.exports = (url) => {
  const filePath = path.join(__dirname, url);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};
