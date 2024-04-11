import getNewsData from "./news.js";
import onEvent from "./onEvent.js";
import countdown from "./timer.js";

function main() {
  onEvent();
  getNewsData();
  countdown();
}

main();
