import { displayInitialPage } from "./initialPage.js";
import { activateTitleList } from "./newsListBtn.js";

async function main() {
  const cachedNewsList = await displayInitialPage();
  activateTitleList(cachedNewsList);
  const updateButton = document.querySelector("button");
  updateButton.addEventListener("click", async () => {
    await displayInitialPage();
  });
}

main();
