import Delay from "../components/delay.js";

function updateTimer(seconds) {
  const timerElement = document.querySelector(".timer");
  timerElement.textContent = `${seconds}초 뒤에 업데이트`;
}

const timerDelay = new Delay();
async function countdown() {
  let seconds = 60;

  updateTimer(seconds);

  while (seconds > 0) {
    await timerDelay.setDelay(1000);
    seconds--;
    updateTimer(seconds);
  }

  const updateBtn = document.querySelector(".update");
  updateBtn.click();
}

export default countdown;
