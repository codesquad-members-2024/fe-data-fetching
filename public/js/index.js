import { displayInitialPage } from "./initialPage.js";
import { activateTitleList } from "./newsListBtn.js";

async function main() {
  await displayInitialPage();
  activateTitleList();
  const updateButton = document.querySelector("button");
  updateButton.addEventListener("click", async () => {
    await displayInitialPage();
  });
}

main();
