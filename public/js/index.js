import { displayInitialPage } from "./initialPage.js";
import { activateTitleList } from "./newsListBtn.js";
import { updateLatestNews } from "./update.js";

async function main() {
  const cachedNewsList = await displayInitialPage();
  activateTitleList(cachedNewsList);
  updateLatestNews();
}

main();
