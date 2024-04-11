import { displayInitialPage } from "./initialPage.js";
import { activateTitleList } from "./newsListBtn.js";

export function updateLatestNews() {
  const updateButton = document.querySelector("button");
  updateButton.addEventListener("click", renderLatestNews);
}

async function renderLatestNews() {
  const newList = await displayInitialPage();
  activateTitleList(newList);
}
