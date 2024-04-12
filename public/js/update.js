import { displayInitialPage } from "./initialPage.js";
import { activateTitleList } from "./newsListBtn.js";
import { UPDATE_TIME, ONE_SECOND } from "../constants/constants.js";

let seconds = UPDATE_TIME;
let timer;

export function updateLatestNews() {
  const updateButton = document.querySelector("button");
  updateButton.addEventListener("click", renderLatestNews);
}

async function renderLatestNews() {
  const newList = await displayInitialPage();
  activateTitleList(newList);
}

export function resetTimer() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
  displayTimerAndUpdate();
}

export function displayTimerAndUpdate() {
  seconds = UPDATE_TIME;

  timer = setInterval(() => {
    const timerBox = document.querySelector(".timer");
    timerBox.textContent = `${seconds--}초 뒤에 자동 업데이트`;
    if (seconds < 0) {
      clearInterval(timer);
      seconds = UPDATE_TIME;
      renderLatestNews();
    }
  }, ONE_SECOND);
}
