import getNewsData from "./view/news.js";
import onEvent from "./view/onEvent.js";
import countdown from "./view/timer.js";

function main() {
  onEvent();
  getNewsData();
  countdown();
}

main();
