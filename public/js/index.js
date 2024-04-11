import { displayInitialPage } from "./initialPage.js";
import { activateTitleList } from "./newsListBtn.js";
// import { update } from "./update.js";

async function main() {
  const cachedNewsList = await displayInitialPage();
  //캐시 체크
  activateTitleList(cachedNewsList);
  const updateButton = document.querySelector("button");
  updateButton.addEventListener("click", async () => {
    const newList = await displayInitialPage();
    activateTitleList(newList);
  });
  // update();
}

main();
