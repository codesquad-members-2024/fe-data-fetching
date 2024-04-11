function updateTimer(seconds) {
  const timerElement = document.querySelector(".timer");
  timerElement.textContent = `${seconds}초 뒤에 업데이트`;
}

let currentDelay = null;

const delay = (ms) => {
  if (currentDelay !== null) {
    clearTimeout(currentDelay);
    currentDelay = null;
  }
  return new Promise((resolve) => {
    currentDelay = setTimeout(resolve, ms);
  });
};

async function countdown() {
  let seconds = 60;
  
  updateTimer(seconds);

  while (seconds > 0) {
    await delay(1000);
    seconds--;
    updateTimer(seconds);
  }

  const updateBtn = document.querySelector(".update");
  updateBtn.click();
}


export default countdown;
